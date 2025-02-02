import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBom } from "../utils/bomSlice";

export default function useFetchBomData(BASE_URL) {
  const [bomdata, setBomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const initialFormData = {
    image:
      "https://s3-alpha-sig.figma.com/img/5919/4539/93e53bbf126cb1b8939bfca689a1c65b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cB-UsKw7~Fmjn6GzXVtBAibSZLJUU1P-~jvH7afdIKWnyWX0mYVhSoZTqnSyUIwgWZNny7lqN1gGGS9A2kNcH284ZdjHITtuCyl5u-T-cdAFqNpv1vgLumXrACg14KQ80igjnuPdblKvmtkjn7DQpla8ITeHz0WNCqDg~40gvxCT-duZEr4cAZboFsqhvBSM2Y9LF7OAcSsYkZMNOpIT0BJj39ZAvfmye0rf1cOD8VFMC1lbwppIYp-5KlbqcSs0PgRWWsQOLDaIyU3-LWKyfdg-~vjDnqNlYCNOT3XDnGGcPS97AYG4f75txyZZV9QIeyvND8ddqPZJViDZOZmCeQ__",
    item: "Secondary Fabric",
    description:
      "The primary material used for crafting the main body of the product.",
    quantity: "2",
    quality: "polyester",
    colorCode: "TPG - 2335",
    supplier: "Nexium",
    dynamicFields: {},
  };

  const [formData, setFormData] = useState(initialFormData);

  const [columnData, setColumnData] = useState({
    columnName: "Cost",
    defaultValue: "Add cost",
  });

  const fetchTableData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(BASE_URL + "/get-table");
      dispatch(setBom(res.data.data));
      setBomData(res.data.data);
      return res.data.data;
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  useEffect(() => {
    if (bomdata.length > 0) {
      const dynamicFields = Object.keys(bomdata[0].dynamicFields || {}).reduce(
        (acc, field) => {
          acc[field] = "";
          return acc;
        },
        {}
      );
      setFormData((prev) => ({
        ...prev,
        dynamicFields,
      }));
    }
  }, [bomdata]);

  const addBomItem = async (dataToSubmit) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(BASE_URL + "/add-row", dataToSubmit);
      const newData = await fetchTableData();

      const newFormData =
        newData.length > 0
          ? {
              image: "",
              item: "",
              description: "",
              quantity: "",
              quality: "",
              colorCode: "",
              supplier: "",
              dynamicFields: Object.keys(newData[0].dynamicFields || {}).reduce(
                (acc, field) => {
                  acc[field] = "";
                  return acc;
                },
                {}
              ),
            }
          : {};

      setFormData(newFormData);
      return true;
    } catch (error) {
      setError(error.message);
      console.error("Error adding BOM item:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const addColumn = async (columnData) => {
    setLoading(true);
    setError(null);
    try {
      await axios.patch(BASE_URL + "/add-columns", columnData);
      await fetchTableData();
      setColumnData({ columnName: "", defaultValue: "" });
      return true;
    } catch (error) {
      setError(error.message);
      console.error("Error adding column:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      bomdata.length > 0 &&
      bomdata[0].dynamicFields &&
      name in bomdata[0].dynamicFields
    ) {
      setFormData((prev) => ({
        ...prev,
        dynamicFields: {
          ...prev.dynamicFields,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleColumnInputChange = (e) => {
    setColumnData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getColumnConfig = () => {
    const excludedColumns = ["_id", "createdAt", "updatedAt", "__v"];
    const baseColumns =
      bomdata.length > 0
        ? Object.keys(bomdata[0]).filter((col) => col !== "dynamicFields")
        : [];
    const dynamicColumns =
      bomdata.length > 0 && bomdata[0].dynamicFields
        ? Object.keys(bomdata[0].dynamicFields)
        : [];

    const columns = [...baseColumns, ...dynamicColumns].filter(
      (col) => !excludedColumns.includes(col)
    );

    return {
      columns,
      gridTemplateColumns: `0.3fr ${columns.map(() => "1fr").join(" ")}`,
    };
  };

  return {
    bomdata,
    loading,
    error,
    formData,
    columnData,
    fetchTableData,
    addBomItem,
    addColumn,
    handleInputChange,
    handleColumnInputChange,
    getColumnConfig,
  };
}
