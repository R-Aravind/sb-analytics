import React from "react";

const Request_Box = () => {
  return (
    <div className="request-box">
      <p>Request Member Information</p>
      <form action="">
        <p>Member Id</p>
        <input
          className="member-id"
          type="text"
          placeholder="Enter Member ID or Member Name"
        />
        <p>Purpose</p>
        <textarea
          className="purpose"
          placeholder="Enter your need for requesting data"
        ></textarea>{" "}
        <br />
        <button type="submit">SUBMIT REQUEST</button>
      </form>
    </div>
  );
};

export default Request_Box;
