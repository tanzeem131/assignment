import "./App.css";
import Body from "./components/Body";
import Layout1 from "./components/Layout1";
import { Routes, Route } from "react-router-dom";
import Layout2 from "./components/Layout2";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Layout1 />} />
          <Route path="techpack-editor/*" element={<Layout2 />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
