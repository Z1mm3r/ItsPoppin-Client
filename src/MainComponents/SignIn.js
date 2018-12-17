import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import API_URL from '../Constants/backend_url.js'

export default class SignIn extends Component {
  state = {
    username: "",
    pw: "",
    pwConfirmation: "",
    returningUser: true,
    email:"",
    badLogin:true
  }

  toggleNewUser = () => this.setState({returningUser: !this.state.returningUser})

  signUpUser = () => {
    console.log("signing up...")
    let body = {user: {name: this.state.username, password: this.state.pw, password_confirmation: this.state.pwConfirmation, email:this.state.email} }

    fetch(API_URL.users,
      {method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)})
      .then(response => response.json())
      .then(info =>{
        this.props.signedIn(info["user"],info["jwt"])
      })
  }
//  TODO ... SIGNUP AND SIGN IN NEED TO HANDLE INCASE WE FAIL LOGIN/ SIGNUP
  logInUser = () => {
    console.log("Signing in...")
    let body = {user: {name: this.state.username, password: this.state.pw} }
    fetch(API_URL.login,
      {method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)})
      .then(response => response.json())
      .then(info => {
        this.props.signedIn(info["user"],info["jwt"])
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state.returningUser ? this.logInUser() : this.signUpUser()
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => console.log(this.state.username, this.state.pw, this.state.pwConfirmation,this.state.email))
  }

  render () {
    return (
        <div>

          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{minWidth:"100vh"}, {minHeight:"100vh"}}
            spacing={16}
            >

            <Grid item  sm={4}>
              <Card>
                 <CardHeader title={!this.state.returningUser ? "Sign Up" : "Sign In"} style={{ textAlign: 'center' }}/>
                 <Paper style={{minHeight : 350, maxHeight : 500, overflow: 'auto'}}>
                   <form onSubmit={this.handleSubmit}>
                     <Grid
                       container
                       direction="column"
                       alignItems="center"
                       justify="center"
                       style={{minWidth:"50vh"},{minHeight:"30vh"}}
                       spacing={16}
                       >
                        <Grid item sm={10}>
                            <TextField label="Name" variant="outlined" type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
                        </Grid>
                        <Grid item sm={10}>
                          <TextField label="Password"variant="outlined" type="Password" value={this.state.pw} onChange={this.handleChange} name="pw"/>
                        </Grid>
                        {!this.state.returningUser ?
                          <>
                            <Grid item sm={10}>
                              <TextField label="Retype Password" variant="outlined" type="Password" value={this.state.pwConfirmation} onChange={this.handleChange} name="pwConfirmation"/>
                            </Grid>
                            <Grid item sm={10}>
                              <TextField label="Email" variant="outlined" type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                            </Grid>
                          </>
                         : null}
                         <Grid item sm={10}>
                           {!this.state.returningUser ? <Button onClick={this.toggleNewUser}>Back</Button> : null}
                           <Input type="submit"> </Input>
                         </Grid>
                     </Grid>
                   </form>
                   {this.state.returningUser ? <Button color="secondary" onClick={this.toggleNewUser}>New User?</Button> : null}
                 </Paper>
              </Card>
            </Grid>
          </Grid>
        </div>
    )
  }
}
