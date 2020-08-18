import React from "react";
import upArrow_icon from "./icons/up-arrow.svg";

const Table = ({ ready, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Member Id <img src={upArrow_icon} alt="" />
          </th>
          <th>
            First Name <img src={upArrow_icon} alt="" />
          </th>
          <th>
            Middle Name <img src={upArrow_icon} alt="" />
          </th>
          <th>
            Last Name <img src={upArrow_icon} alt="" />
          </th>
          <th>
            Status <img src={upArrow_icon} alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            { member_id, first_name, middle_name, last_name, renewal_category },
            index
          ) => {
            const activity =
              renewal_category === "Arrears" ? "inactive" : "active";
            return (
              <tr key={index}>
                <td>{member_id}</td>
                <td>{first_name}</td>
                <td>{middle_name}</td>
                <td>{last_name}</td>
                <td>
                  <div className={`status-${activity}`}>{activity}</div>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default Table;
