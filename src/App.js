import React, { useEffect } from "react";
import "./App.css";
import Sb_logo from "./icons/ieee_sb_cec_logo.png";
import todo_svg from "./icons/todo.svg";
import barGraph_svg from "./icons/bar-graph.svg";

function App() {
  useEffect(() => {
    document.title = "SB Analytics";
  }, []);
  return (
    <body>
      <nav>
        <div className="sb-logo">
          <img src={Sb_logo} alt="" />
        </div>
        <li class="side-menu">
          <a class="side-menu-item active" href="#">
            <img src={todo_svg} alt="" />
            <p>Member Details</p>
          </a>

          <a class="side-menu-item" href="#">
            <img src={barGraph_svg} alt="" />
            <p>Reports</p>
          </a>
        </li>
      </nav>
      {/* main is here */}
      <main>
        <header>
          <h1 class="title">STUDENT BRANCH ANALYTICS</h1>

          <div class="logged-user">Jennifer Doe</div>
        </header>

        <section>
          <h1>Member Details</h1>

          <div class="search-bar">
            <img src="./icons/search.svg" alt="" />
            <input type="text" placeholder="Search" />
            <select id="">
              <option value="member-id">Member ID</option>
            </select>
            <button>SEARCH</button>
          </div>
          <div class="container">
            <table>
              <thead>
                <tr>
                  <th>
                    Member Id <img src="./icons/up-arrow.svg" alt="" />
                  </th>
                  <th>
                    First Name <img src="./icons/up-arrow.svg" alt="" />
                  </th>
                  <th>
                    Middle Name <img src="./icons/up-arrow.svg" alt="" />
                  </th>
                  <th>
                    Last Name <img src="./icons/up-arrow.svg" alt="" />
                  </th>
                  <th>
                    Status <img src="./icons/up-arrow.svg" alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-active">Active</div>
                  </td>
                </tr>
                <tr>
                  <td>R</td>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>
                    <div class="status-inactive">Inactive</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="request-box">
              <p>Request Member Information</p>
              <form action="">
                <p>Member Id</p>
                <input
                  class="member-id"
                  type="text"
                  placeholder="Enter Member ID or Member Name"
                />
                <p>Purpose</p>
                <textarea
                  class="purpose"
                  placeholder="Enter your need for requesting data"
                ></textarea>{" "}
                <br />
                <button type="submit">SUBMIT REQUEST</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
