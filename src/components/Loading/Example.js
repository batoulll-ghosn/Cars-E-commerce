import React from "react";
import ReactLoading from "react-loading";

import "./style.css";

const Example = () => (
  <div className="loading">
    {/* <h2>Loading</h2> */}
    <ReactLoading type="spokes" color="black" />
  </div>
);

export default Example;
