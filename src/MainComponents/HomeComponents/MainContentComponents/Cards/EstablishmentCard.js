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
              <Grid item sm={3}>
                <CardMedia
                component="img"
                objectfit="contain"
                src={this.props.establishment.picture_url}
                alt="Contemplative Reptile"
                height="140"
                />
              </Grid>
              <Grid item sm={9}>
              <Grid container
                direction="column"
                alignItems="stretch"
                spacing={0}
                style={{minWidth:"100%"}, {minHeight:"100%"}} >
                  <Grid item>
                    <Typography variant="subtitle1">
                      {this.props.establishment.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container
                      direction="row"
                      alignItems="flex-start"
                      style={{minWidth:"100%"}, {minHeight:"20%"}} >
                      <Grid item sm ={5}>
                        <Typography variant="subtitle1">
                          Type: {this.props.establishment.domain}
                        </Typography>
                      </Grid>
                      <Grid item sm={5}>
                        <Typography variant="subtitle1">
                          Rating: {this.props.establishment.rating}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container
                      direction="row"
                      alignItems="flex-start"
                      spacing={0}
                      style={{minWidth:"100%"}, {minHeight:"20%"}} >

                      <Grid item sm ={5}>
                        <Typography variant="subtitle1">
                          Genre: {this.props.establishment.genre}
                        </Typography>
                      </Grid>
                      <Grid item sm={5}>
                        <Typography variant="subtitle1">
                          Address: {this.props.establishment.address}
                        </Typography>
                      </Grid>

                    </Grid>
                  </Grid>
                  <Grid item>
                   {this.props.active ? <Button onClick={() => this.props.checkOut(this.props.establishment.id)}>Check Out!</Button> : <Button onClick={() => this.props.checkIn(this.props.establishment.id)}>Check In!</Button>}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </CardContent>
      </Card>
    )
  }
}
