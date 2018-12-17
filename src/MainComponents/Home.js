import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import MainContent from './HomeComponents/MainContent'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import API_URL from '../Constants/backend_url.js'

export default class SignIn extends Component {

  render() {
    return (
      <Grid
      container
      alignItems="center"
      justify="center"
      spacing={24}
      style={{minWidth:"100vh"}, {minHeight:"100vh"}}
      >

        <Grid item xs = {7}>
          <MainContent token = {this.props.token}/>
        </Grid>
        <Grid item xs = {2}>
          <Paper style={{minWidth:"80vh"}, {minHeight:"80vh"}}> Friends </Paper>
        </Grid>

      </Grid>

    )
  }

}
