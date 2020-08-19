import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import RequestBox from "./components/RequestBox/RequestBox";
import { useState } from "react";
// import axios from "axios";
import json_data from "./data.json";

function App() {
  useEffect(() => {
    // axios
    //   .get("https://sb-analytics-api1.herokuapp.com/api/members")
    //   .then((res) => {
    //     setReady(true);
    //     console.log(res.data);
    //     setData(res.data);
    //   });
    setData(json_data);
  }, []);

  const clearAlerts = () => {
    setAlerts({
      id: "",
      purpose: "",
    });
  };
  const sendReq = (data) => {
    // axios.post("https://sb-analytics-api1.herokuapp.com/api/", data);
    if (!data.id.length || !data.purpose.length) {
      setAlerts({
        id: "Enter a valid Id",
        purpose: "Enter a purpose for the information",
      });
      setTimeout(() => {
        clearAlerts();
      }, 5000);
    } else {
      console.log(data);
      clearAlerts();
    }
  };
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [alerts, setAlerts] = useState({ id: "", purpose: "" });
  return (
    <>
      <Navbar />
      {/* main is here */}
      <main>
        <header>
          <h1 className="title">STUDENT BRANCH ANALYTICS</h1>
          <div className="logged-user">Jennifer Doe</div>
        </header>

        <section>
          <h1>Member Details</h1>
          <Search />
          <div className="container">
            <Table data={data} ready={ready} setData={setData} />
            <RequestBox sendReq={sendReq} alerts={alerts} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
