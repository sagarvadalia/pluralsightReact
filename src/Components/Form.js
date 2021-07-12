import React from 'react';
import axios from 'axios'
class Form extends React.Component {
  // userNameInput = React.createRef();
  state = {username: ''}
  handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(this.state.username)
    const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" placeholder="Github username" value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}></input>
        <button>Add Card</button>
      </form>
    )
  }
 }

 export default Form
