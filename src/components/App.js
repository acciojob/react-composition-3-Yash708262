
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
      <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Hello from tooltip">
        <span>Hover over this text</span>
      </Tooltip>
    </div>
  )
}

export default App
