import React from "react";
import Sb_logo from "./icons/ieee_sb_cec_logo.png";
import "./Navbar.css";
import todo_svg from "./icons/todo.svg";
import barGraph_svg from "./icons/bar-graph.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="sb-logo">
        <img src={Sb_logo} alt="" />
      </div>
      <li className="side-menu">
        <a className="side-menu-item active" href="#">
          <img src={todo_svg} alt="" />
          <p>Member Details</p>
        </a>

        <a className="side-menu-item" href="#">
          <img src={barGraph_svg} alt="" />
          <p>Reports</p>
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
