import React from "react";
import "./RequestBox.css";
import { useState } from "react";

const Request_Box = ({ sendReq }) => {
  //👇🏻 function to validate the message before sending to the server
  const passReq = (data) => {
    let youShallNotpass = false;
    if (data.id.length !== 8 || !parseInt(data.id)) {
      setIdAlert("Enter a valid Id");
      youShallNotpass = true;
    } else setIdAlert("");
    if (data.purpose.split(" ").length < 25) {
      setpurpAlert("Purpose must contain above 25 words");
      youShallNotpass = true;
    } else setpurpAlert("");

    if (!youShallNotpass) {
      sendReq(data);
      return;
    }
    console.log("YOU SHALL NOT PASS!!");
  };
  // Hooks for alert and for the data to be passed 🔽
  const [idAlert, setIdAlert] = useState("");
  const [purpAlert, setpurpAlert] = useState("");
  const [Id, SetId] = useState("");
  const [Purpose, SetPurpose] = useState("");
  return (
    <div className="request-box">
      <p>Request Member Information</p>
      <form action="">
        <p>Member Id</p>
        <input
          className="member-id"
          type="text"
          placeholder="Enter Member ID or Member Name"
          value={Id}
          onChange={(e) => SetId(e.target.value)}
        />
        <span className="red alert">{idAlert}</span>
        <p>Purpose</p>
        <textarea
          className="purpose"
          placeholder="Enter your need for requesting data"
          value={Purpose}
          onChange={(e) => SetPurpose(e.target.value)}
        ></textarea>{" "}
        <span className="red alert">{purpAlert}</span>
        <br />
        <button
          type="submit"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            passReq({ id: Id, purpose: Purpose });
          }}
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
};

export default Request_Box;
