import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import CreatePost from './components/CreatePost'

class App extends Component {

  state = {
    posts: []
  }

getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data => data.json())
  .then(data=> {
    this.setState({posts:data.slice(0,4)})
  console.log(this.state)})
}

clearPosts = () => {
  this.setState({posts: []})
}

  render() {
    console.log('render')
    console.log(this.state.posts.length)
    return (
      <div className="App">
      <button onClick={this.getPosts}>Get Posts</button> 
      <button onClick={this.clearPosts}>Clear Posts</button>
      <CreatePost createPost={this.createPost}/>
      {this.state.posts.map(post => <Post key={post.id} title={post.title}/>)}
      </div>
    );
  }
}

export default App;
