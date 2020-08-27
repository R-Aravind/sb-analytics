import React from "react";
import "./Table.css";
import upArrow_icon from "./icons/up-arrow.svg";
import { useState } from "react";

const Table = ({ ready, data, setData, filter, category }) => {
  const [tick, setTick] = useState(1);
  const idSort = () => {
    const mydata = [...data];
    mydata[1].member_id < mydata[0].member_id
      ? mydata.sort((a, b) => a.member_id - b.member_id)
      : mydata.sort((a, b) => b.member_id - a.member_id);
    setData(mydata);
  };
  const FirstNameSort = () => {
    const mydata = [...data];
    mydata[1].first_name < mydata[0].first_name
      ? mydata.sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
      : mydata.sort((a, b) => (a.first_name > b.first_name ? -1 : 1));
    setData(mydata);
  };
  const StatusSort = () => {
    const mydata = [...data];
    if (tick) {
      mydata.sort((a, b) =>
        a.renewal_category.toUpperCase() < b.renewal_category.toUpperCase()
          ? -1
          : 1
      );

      setTick(0);
    } else {
      mydata.sort((a, b) =>
        a.renewal_category.toUpperCase() < b.renewal_category.toUpperCase()
          ? 1
          : -1
      );
      setTick(1);
    }

    setData(mydata);
  };
  return (
    <table>
      <thead>
        <tr>
          <th onClick={idSort} style={{ cursor: "pointer" }}>
            Member Id <img src={upArrow_icon} alt="" />
          </th>
          <th onClick={FirstNameSort} style={{ cursor: "pointer" }}>
            First Name <img src={upArrow_icon} alt="" />
          </th>
          <th>
            Middle Name <img src={upArrow_icon} alt="" />
          </th>
          <th>
            Last Name <img src={upArrow_icon} alt="" />
          </th>
          <th onClick={StatusSort} style={{ cursor: "pointer" }}>
            Status <img src={upArrow_icon} alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter(
            ({
              member_id,
              first_name,
              last_name,
              middle_name,
              renewal_category,
            }) => {
              if (category === "member_id")
                return ("" + member_id).includes(filter);
              if (category === "name") {
                let name = first_name;
                if (middle_name) name += " " + middle_name;
                if (last_name) name += " " + last_name;
                return name.toUpperCase().includes(filter.toUpperCase());
              }
              if (category === "renewal_category")
                return renewal_category.includes(filter);
            }
          )
          .map(
            (
              {
                member_id,
                first_name,
                middle_name,
                last_name,
                renewal_category,
              },
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
                    <div className={`status-${activity}`}>
                      {(renewal_category === "First Year Renewed") |
                      (renewal_category === "Renew")
                        ? "Renewed"
                        : renewal_category}
                    </div>
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
