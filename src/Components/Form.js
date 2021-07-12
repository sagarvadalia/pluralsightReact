import React from 'react';
class Form extends React.Component {
  // userNameInput = React.createRef();
  state = {username: ''}
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.username)

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
