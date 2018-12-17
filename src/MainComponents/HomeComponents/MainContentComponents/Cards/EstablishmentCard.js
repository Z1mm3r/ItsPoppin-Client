import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

export default class EstablishmentCard extends Component {


  render(){
    debugger
    return(
      <Card xs={8} style={{minHeight:"10vh"}}>
      <CardContent>
          <Paper style={{minWidth:"100%"},{minHeight:"10vh"}} >
            <Grid container
              direction="row"
              alignItems="stretch"
              justify="center"
              spacing={0}
              style={{minWidth:"100%"}, {minHeight:"100%"}} >
              <CardMedia
              component="img"
              src={this.props.establishment.pictureurl}
              alt="Contemplative Reptile"
              height="140"

              >
              </CardMedia>
              <Typography variant="subtitle1">
                {this.props.establishment.name}
              </Typography>
            </Grid>
          </Paper>
        </CardContent>
      </Card>
    )
  }
}
