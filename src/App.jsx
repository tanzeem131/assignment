import "./App.css";
import Body from "./components/Body";
import Page1 from "./components/Page1";
import { Routes, Route } from "react-router-dom";
import Page2 from "./components/Page2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Page1 />} />
        <Route path="techpack-editor/*" element={<Page2 />} />
      </Route>
    </Routes>
  );
}

export default App;
