import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import API_URL from '../../../Constants/backend_url.js'

export default class DefaultContent extends Component {


  render(){
    return(
      <Paper style={{minWidth:"90vh"}, {minHeight:"90vh"}} >
        <Grid container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={24}
          style={{minWidth:"50vh"}, {minHeight:"50vh"}} >
            <Grid item sm={3}>
            <div >
              <Button onClick = {() => this.props.setTab("SEARCH")}  variant="outlined" color="primary">
                Search for Places
              </Button>
            </div>
            </Grid>
            <Grid item sm={3}>
              <Button variant="outlined" color="secondary">
                Open Map
              </Button>
            </Grid>
            <Grid item sm={3}>
              <Button  onClick = {() => {this.props.setTab("EDIT")}} variant="contained" color="secondary">
                Edit Profile
              </Button>
            </Grid>
        </Grid>
      </Paper>

    )
  }

}
