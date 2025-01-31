import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

export default function Body() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
