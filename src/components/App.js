import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="Hello tooltip">
        <p>Hover over me</p>
      </Tooltip>

      <Tooltip text="Button info">
        <button>Click me</button>
      </Tooltip>
    </div>
  );
}

export default App;
