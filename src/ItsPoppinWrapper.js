import React, { Component } from 'react';
import SignIn from "./MainComponents/SignIn"
import Home from "./MainComponents/Home"


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class ItsPoppinWrapper extends Component {

  state ={
    userID:null,
    name:null,
    currentVisit:null,
    jwt:null
  }

  signedIn = (user,token) =>{
    console.log("Logged In")
    console.log(user["activeVisit"])
    this.setState(
      {
      userID:user["id"],
      name: user["name"],
      currentVisit: user["activeVisit"],
      jwt: token
    })
    //TODO
  }

  signedOut = () => {
    this.setState({
      userID:null,
      name:null,
      currentVisit:null,
      jwt:null
    })
  }

  checkedIn = (visit) => {
    console.log(visit)
    this.setState({
      currentVisit:visit
    })
  }

  checkedOut= () =>{
    this.setState({
      currentVisit:null
    })
  }

  loggedIn = () =>{
    return !!this.state.userID
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={props => (this.loggedIn() ? <Redirect to="/home"/> : <Redirect to="/signin"/>)}/>
          <Route exact path="/signin" render={props => (this.loggedIn() ? <Redirect to="/home"/> : <SignIn signedIn = {this.signedIn}/>)}/>
          <Route exact path="/home" render={props => (this.loggedIn() ?
            <Home checkedIn={this.checkedIn} checkedOut={this.checkedOut} signedOut={this.SignedOut} token = {this.state.jwt} currentVisit = {this.state.currentVisit} userId = {this.state.userID} userName = {this.state.name}/> :
            <Redirect to="/signin"/>)} />
        </Switch>
      </div>
    )
  }

}


export default withRouter(ItsPoppinWrapper)
