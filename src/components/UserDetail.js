import React from "react";
function UserDetail(props) {
  console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th>Headshot</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody className="">
        {props.results.map(result => (
          <tr>
            <td><img alt="" src={result.picture.thumbnail} style={{ margin: "0 auto" }} /></td>
            <td><h3>{result.name.first + " " + result.name.last}</h3></td>
            <td><h3>{result.email}</h3></td>
            <td><h3>{result.phone}</h3></td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}


export default UserDetail;
