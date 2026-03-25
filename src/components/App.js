
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h2>Hover me</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <p>Hover over this text</p>
      </Tooltip>
    </div>
  );
};

export default App;