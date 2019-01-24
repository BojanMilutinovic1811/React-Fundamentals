import React from 'react'

export default class CreatePost extends React.Component {

    state = {
        title: '',
        body: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    createPost = (e) => {
        e.preventDefault()
        const post = {title: this.state.title,
                      body: this.state.body}
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(post)
  })
  .then(response=> response.json())
  .then(data=> console.log(data))
    }

    render() {

        return (
            <div>
                <form onSubmit={this.createPost}>
                    <div>
                    <label>Title: </label><br/>
                    <input type='text' name='title' onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Body: </label><br/>
                    <input type='text' name='body' onChange={this.onChange}/>
                    </div>
                    <button>submit</button>
                </form>
              
            </div>
          )
    }
}
