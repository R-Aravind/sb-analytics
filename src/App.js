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

  const sendReq = (data) => {
    // axios.post("https://sb-analytics-api1.herokuapp.com/api/", data);
    console.log("Got the request");
    console.log(data);
  };
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
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
          <Search query={query} setQuery={setQuery} />
          <div className="container">
            <Table data={data} filter={query} ready={ready} setData={setData} />
            <RequestBox sendReq={sendReq} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
