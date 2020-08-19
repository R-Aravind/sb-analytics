import React from "react";
import { useState } from "react";

const Request_Box = ({ sendReq, alerts }) => {
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
        <span className="red alert">{alerts.id}</span>
        <p>Purpose</p>
        <textarea
          className="purpose"
          placeholder="Enter your need for requesting data"
          value={Purpose}
          onChange={(e) => SetPurpose(e.target.value)}
        ></textarea>{" "}
        <span className="red alert">{alerts.purpose}</span>
        <br />
        <button
          type="submit"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            sendReq({ id: Id, purpose: Purpose });
          }}
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
};

export default Request_Box;
