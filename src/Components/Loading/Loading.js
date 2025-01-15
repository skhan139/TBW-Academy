import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Loading.css";

function Loading({ LoaderType = BallTriangle, addStyle, LoaderStyle }) {
  return (
    <div className="loading" style={addStyle}>
      <LoaderType
        height={80}
        width={80}
        color="#e50914"
        style={LoaderStyle}
      />
    </div>
  );
}

export default Loading;