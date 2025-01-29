import "./App.css";
import Body from "./components/Body";
import Layout1 from "./components/Layout1";
import { Routes, Route } from "react-router-dom";
import Layout2 from "./components/Layout2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Layout1 />} />
        <Route path="techpack-editor/*" element={<Layout2 />} />
      </Route>
    </Routes>
  );
}

export default App;
