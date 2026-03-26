import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="this is tooltip">
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>

      <Tooltip text="this is another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
