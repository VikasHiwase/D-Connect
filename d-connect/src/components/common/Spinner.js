import React from "react";
import spinner from "../../img/spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", display: "block", margin: "auto" }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
