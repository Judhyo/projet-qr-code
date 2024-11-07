import "./style.css";
import { NavLink } from "react-router-dom";
// import { IoBarChartSharp,IoLogOut } from "react-icons/io5";
// import {BsFillBookFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="active">
        <NavLink>Logo</NavLink>
      </li>
      <li>
        <NavLink className="list" to={"/men/Etudiant"}>
          {/*<IoBarChartSharp />*/} GenererQr
        </NavLink>
      </li>
      <li>
        <NavLink className="dropdown-list" to={"/men/Information"}>
          <span className="react-icon1">{/*<BsFillBookFill />*/}</span>{" "}
          Information
        </NavLink>
      </li>
      <li>
        <NavLink className="dropdown-list" to={"/men/Scanner"}>
          <span className="react-icon1">{/*<BsFillBookFill />*/}</span> Scanner
        </NavLink>
      </li>
      <li className="logout">
        <NavLink className="list" to={"/men/Logout"}>
          <span className="react-icon2 ">{/*<IoLogOut />*/}</span>Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
