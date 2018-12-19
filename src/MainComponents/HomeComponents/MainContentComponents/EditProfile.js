import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';

import API_URL from '../../../Constants/backend_url.js'

export default class EditProfile extends Component {

  state = {
    username: "",
    pw: "",
    pwConfirmation: "",
    email:"",
    profilePictureUrl:"",
    badLogin:true
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.editUser()
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  editUser = () => {
    console.log("sending edit...")
    let body = {user: {name: this.state.username, password: this.state.pw, password_confirmation: this.state.pwConfirmation, email:this.state.email} }

    fetch(`${API_URL.users}/${this.props.userId}`,
      {method: "PATCH",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.props.token}`},
      body: JSON.stringify(body)})
      .then(response => response.json())
      .then(info =>{
        debugger
        this.props.signedIn(info["user"],info["jwt"])
      })
  }

  componentDidMount(){
    debugger
    fetch(`${API_URL.users}/${this.props.userId}`,
      {method: "GET",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.props.token}`}})
      .then(response => response.json())
      .then(info =>{
        debugger
        console.log(info)
      })
  }

  render(){
    return(
      <Paper style={{minWidth:"90vh"}, {minHeight:"90vh"}} >
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
                  <Avatar src={this.state.profilePictureUrl} alt={API_URL.defaultProfilePicture}/>
                 <TextField label="Profile Picture URL" variant="outlined" type="text" value={this.state.profilePictureUrl} onChange={this.handleChange} name="username"/>
             </Grid>
             <Grid item sm={10}>
               <TextField label="Password"variant="outlined" type="Password" value={this.state.pw} onChange={this.handleChange} name="pw"/>
             </Grid>
              <Grid item sm={10}>
                <TextField label="Retype Password" variant="outlined" type="Password" value={this.state.pwConfirmation} onChange={this.handleChange} name="pwConfirmation"/>
              </Grid>
              <Grid item sm={10}>
                <TextField label="Email" variant="outlined" type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
              </Grid>

              <Grid item sm={10}>
                <Input type="submit"> </Input>
              </Grid>

          </Grid>
        </form>
      </Paper>
    )}
}
