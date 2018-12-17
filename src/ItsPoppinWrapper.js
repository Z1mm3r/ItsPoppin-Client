import React, { Component } from 'react';
import SignIn from "./MainComponents/SignIn"
import Home from "./MainComponents/Home"


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class ItsPoppinWrapper extends Component {

  state ={
    userID:null,
    name:null,
    jwt:null
  }

  signedIn = (user,token) =>{
    console.log("Logged In")
    this.setState(
      {
      userID:user["id"],
      name: user["name"],
      jwt: token
    })
    //TODO
  }

  signedOut = () => {
    this.setState ={
      userID:null,
      name:null,
      jwt:null
    }
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
            <Home loggedOut={this.loggedOut} token = {this.state.jwt} userId = {this.state.signedIn} userName = {this.state.name}/> :
            <Redirect to="/signin"/>)} />
        </Switch>
      </div>
    )
  }

}


export default withRouter(ItsPoppinWrapper)
