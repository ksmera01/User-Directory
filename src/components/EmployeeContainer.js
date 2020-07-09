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
    result: {},
    search: "",
    employeeList: []
  };

  // When this component mounts, call API to find random users when the page first loads
  componentDidMount() {
    // console.log(res.data);
    API.getAllEmployees().then(res => this.setState({
      employeeList: res.data.results
    })).catch(err => console.log(err))
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
          <Col size="md-8">
            <Card
              heading={"Employee Directory"}
            >
              {this.state.result.name ? (
                <UserDetail
                  name={this.state.result.name.first}
                  src={this.state.result.picture.thumbnail}
                  email={this.state.result.email}
                  phone={this.state.result.phone}
                />
              ) : (
                  <h3>employeeList</h3>
                )}
            </Card>
          </Col>
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
      </Container>
    );
  }
}

export default EmployeeContainer;
