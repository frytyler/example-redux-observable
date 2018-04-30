import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled, { css } from "styled-components";

import { createPost } from "./actions/posts";

const Form = styled.form`
  width: 100%;
  margin: 20px;
`;

const Text = styled.p`
  font-size: 0.8em;
`;

const field = css`
  padding: 5px;
  appearance: none;
  border: 1px solid #eee;
  font-family: "Verdana";
  font-size: 13px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  ${field};
`;

const Textarea = styled.textarea`
  ${field};
  resize: none;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  height: 3em;
  border-radius: 3em;
  line-height: 3em;
  min-width: 100px;
  text-align: center;
  font-size: 0.9rem;
  display: block;
  background: #4185f2;
  color: #ffffff;
`;

class FormComponent extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  onChangeHandler(key) {
    return e => {
      this.setState({
        [key]: e.target.value
      });
    };
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Text>Create a new post:</Text>
        <Input
          type="text"
          placeholder="Post Title"
          onChange={this.onChangeHandler("title").bind(this)}
        />
        <br />
        <Textarea
          placeholder="Post Body"
          onChange={this.onChangeHandler("body").bind(this)}
        />
        <Button type="submit">Create</Button>
        <Text>
          <b>Note:</b> The api this hits doesn't actually create so it will
          always return id: 101
        </Text>
      </Form>
    );
  }
}

function mapDispatchToProps() {
  return dispatch => bindActionCreators({ createPost }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(FormComponent);
