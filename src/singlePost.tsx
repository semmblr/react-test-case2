import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface RouteParams {
  id: string;
}

class SinglePost extends Component<{ match: { params: RouteParams } }, { post: Post | null }> {
  constructor(props: { match: { params: RouteParams } }) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost = async () => {
    const { id } = this.props.match.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    this.setState({ post: data });
  };

  render() {
    const { post } = this.state;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back to Blog List</Link>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default SinglePost;
