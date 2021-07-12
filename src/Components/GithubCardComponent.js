import React from 'react'
import Cards from './Cards'
import CardList from './CardList'
import Form from './Form'

// using class components
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
class GithubCardComponent extends React.Component {
 state = {
      profiles:testData
 }
  addNewProfile = (profileData) => {
    console.log('App', profileData)
    this.setState(prevState => ({profiles: [...prevState.profiles, profileData]}))
  }
  render() {
    return <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit = {this.addNewProfile}></Form>
      <CardList profiles={this.state.profiles}></CardList>

      </div>
  }

}
export default GithubCardComponent
