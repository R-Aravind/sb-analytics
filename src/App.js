import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import RequestBox from "./components/RequestBox/RequestBox";
import { useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // Calling the api for member data
    axios
      .get("https://sb-analytics-api1.herokuapp.com/api/members")
      .then((res) => {
        setReady(true);
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const sendReq = (data) => {
    // axios.post("https://sb-analytics-api1.herokuapp.com/api/", data);
    console.log("Got the request");
    console.log(data);
  };

  // Hooks
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("member_id");
  return (
    <>
      {/* Navbar Component  */}
      <Navbar />
      <main>
        <header>
          <h1 className="title">STUDENT BRANCH ANALYTICS</h1>
          <div className="logged-user">Jennifer Doe</div>
        </header>

        <section>
          <h1>Member Details</h1>
          {/* Search Bar Component  */}
          <Search
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
          />
          <div className="container">
            {/* Table Component that displays all the data  */}
            <Table
              data={data}
              filter={query}
              ready={ready}
              setData={setData}
              category={category}
            />
            {/* Request Box component  */}
            <RequestBox sendReq={sendReq} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
