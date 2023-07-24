import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

class BlogList extends Component<{}, { posts: Post[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.setState({ posts: data });
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BlogList;
