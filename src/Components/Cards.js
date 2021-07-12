import React from 'react'

class Cards extends React.Component{
  render() {
    const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt = "placeholder"></img>
          <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}
export default Cards;
