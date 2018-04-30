import React from "react";

import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPosts } from "./actions/posts";
import Posts from "./posts";
import Form from "./form";

const Main = styled.div`
  font-family: "Verdana";
`;

const Heading = styled.h1`
  margin: 20px;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Main>
        <Heading>Posts...</Heading>
        <Form />
        <Posts />
      </Main>
    );
  }
}

function mapDispatchToProps() {
  return dispatch => bindActionCreators({ getPosts }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(App);
