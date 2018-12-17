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
import EstablishmentCard from './Cards/EstablishmentCard'

export default class SearchContent extends Component {

  state = {
    establishments:[{}]
  }

  componentDidMount(){
    this.getEstablishments()
  }

  renderEstablishmentCards = () =>{
    return (
      this.state.establishments.map(establishment => {
        return <EstablishmentCard key = {`es_${establishment.id}`} establishment={establishment}/>
      })
    )
  }

  getEstablishments = () =>{
    fetch(API_URL.establishments ,
      {method: "GET",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.props.token}`}})
      .then(response => response.json())
      .then(info =>{(
        this.setState({
          establishments:info
        })
      )})
  }

  render(){
    return(
      <Paper style={{minWidth:"10vw"}, {minHeight:"90vh"}} >
        <Grid container
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={0}
          style={{minWidth:"80%"}, {minHeight:"80%"}} >

          {this.renderEstablishmentCards()}

        </Grid>
      </Paper>
    )
  }
}
