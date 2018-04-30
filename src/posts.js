import React from "react";

import styled from "styled-components";
import { connect } from "react-redux";

const Main = styled.div`
  margin: 20px;
`;

const Post = styled.article`
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
`;
const Heading = styled.h2`
  font-weight: normal;
  text-transform: capitalize;
  margin: 0 0 15px 0;
  padding: 0 0 5px 0;
  border-bottom: 1px solid #f5f5f5;
`;

const Body = styled.div`
  font-weight: normal;
  font-size: 1em;
`;

const Meta = styled.div`
  font-size: 0.675em;
  color: grey;
  margin-top: 10px;
`;

class Posts extends React.Component {
  postFactory(post) {
    return (
      <Post key={post.id}>
        <Heading>{post.title}</Heading>
        <Body>{post.body}</Body>
        <Meta>
          UserId: {post.userId} | Id: {post.id}
        </Meta>
      </Post>
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <Main>
        {Object.values(posts)
          .reverse()
          .map(this.postFactory.bind(this))}
      </Main>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Posts);
