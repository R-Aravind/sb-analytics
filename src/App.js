import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import RequestBox from "./components/RequestBox/RequestBox";
import { useState } from "react";

function App() {
  useEffect(() => {
    document.title = "SB Analytics";
    fetch("https://sb-analytics-api1.herokuapp.com/api/members")
      .then((res) => res.json())
      .then((data) => {
        setReady(true);
        setData(data);
      });
  }, []);

  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);

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
            <Table data={data} ready={ready} />
            <RequestBox />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
