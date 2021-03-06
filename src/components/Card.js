import React from "react";

function Card(props) {
  return (
    <div className="card text-center" style={{ width: "1000px" }}>
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
