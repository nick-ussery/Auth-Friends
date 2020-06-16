import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class New extends React.Component {
  state = {
    credentials: {
      username: "",
      email: "",
      age:''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  createNew = e => {
    e.preventDefault();
    const newFriend = {
        name: this.state.credentials.username,
        email: this.state.credentials.email,
        age: this.state.credentials.age

    }
    console.log('new friend', newFriend)
    axiosWithAuth()

  };

  render() {
    return (
      <div>
        <form onSubmit={this.createNew}>
            <label>Name</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          /><label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          /><label>Age</label>
          <input 
            type='text'
            name='age'
            value={this.state.credentials.age}
            onChange={this.handleChange}
          />
          <button>Make new friend</button>
        </form>
      </div>
    );
  }
}

export default New