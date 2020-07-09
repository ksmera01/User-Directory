import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.results.name.first} className="img-fluid" src={props.results.picture.thumbnail} style={{ margin: "0 auto" }} />
      <h3>Name: {props.results.name.first} {props.name.last}</h3>
      <h3>Email: {props.results.email}</h3>
      <h3>Phone: {props.results.phone}</h3>
    </div>
  );
}

export default UserDetail;
