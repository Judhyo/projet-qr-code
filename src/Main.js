import NavBar from "./Components/NavBar";
import { Outlet, Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import "./Main.css";
// import { toast } from "react-toastify";

function Main() {
  //   if (Cookies.get("nom") !== undefined) {
  return (
    <div className="main-flex">
      <NavBar />
      <div className="main">
        {/*<Etablisement />*/}
        <Outlet />
      </div>
    </div>
  );
  //   } else {
  //     return <Navigate to="/" />;
  //   }
}
export default Main;
