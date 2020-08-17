import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = 'SB Analytics'
  }, [])
  return <div>Hello People</div>;
}

export default App;
