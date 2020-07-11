import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import UserDetail from "./UserDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    // result: {},
    search: "",
    employeeList: [],
    employeeFilter: [],
    listOrder: ""
  };

  // When this component mounts, call API to find random users when the page first loads
  componentDidMount() {
    // console.log(res.data);
    API.getAllEmployees().then(res => this.setState({
      employeeList: res.data.results,
      employeeFilter: res.data.results
    })).catch(err => console.log(err))
  }

  sortEmpByName = () => {
    const empFilter = this.state.employeeFilter;
    // console.log(empFilter)
    if (this.state.listOrder === "ascending") {
      const empSort = empFilter.sort((empA, empB) => (empA.name.first > empB.name.first) ? 1 : -1)
      // console.log(empSort)
      this.setState({
        employeeFilter: empSort,
        listOrder: "descending"
      })
    } else {
      const empSort = empFilter.sort((empA, empB) => (empA.name.first > empB.name.first) ? -1 : 1)
      // console.log(empSort)
      this.setState({
        employeeFilter: empSort,
        listOrder: "ascending"
      })
    }
  }

  searchUsers = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Random User API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <Card
              heading={"Employee Directory"}
            >
              <UserDetail results={this.state.employeeList}
                sortEmpByName={this.sortEmpByName}
              />

            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
