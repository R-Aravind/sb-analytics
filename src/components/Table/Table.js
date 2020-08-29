import React from "react";
import "./Table.css";
import upArrow_icon from "./icons/up-arrow.svg";
import { useState } from "react";

const Table = ({ ready, data, setData, filter, category }) => {
  const [tick, setTick] = useState(1);
  // sorting by id
  const idSort = () => {
    const mydata = [...data];
    mydata[1].member_id < mydata[0].member_id
      ? mydata.sort((a, b) => a.member_id - b.member_id)
      : mydata.sort((a, b) => b.member_id - a.member_id);
    setData(mydata);
  };
  // sorting by name
  const FirstNameSort = () => {
    const mydata = [...data];
    mydata[1].first_name < mydata[0].first_name
      ? mydata.sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
      : mydata.sort((a, b) => (a.first_name > b.first_name ? -1 : 1));
    setData(mydata);
  };
  // sorting the status
  const StatusSort = () => {
    const mydata = [...data];

    // function to getting a consistent category for sorting

    const getcat = (item) =>
      (item.renewal_category === "First Year Renewed") |
      (item.renewal_category === "Renew")
        ? "Renewed"
        : item.renewal_category;
    if (tick) {
      mydata.sort((a, b) =>
        getcat(a).toUpperCase() < getcat(b).toUpperCase() ? -1 : 1
      );

      setTick(0);
    } else {
      mydata.sort((a, b) =>
        getcat(a).toUpperCase() < getcat(b).toUpperCase() ? 1 : -1
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
        {/* dunamically adding data from the api  */}
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
                return renewal_category
                  .toUpperCase()
                  .includes(filter.toUpperCase());
              return "";
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
