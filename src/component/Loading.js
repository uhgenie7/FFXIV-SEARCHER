import React from "react";
import load from "../img/sample/loading.gif";

function Loading() {
  return (
    <div className="loading">
      <img className="avatar-img" src={load} alt="avatar-img" width="25px" />
    </div>
  );
}

export default Loading;
