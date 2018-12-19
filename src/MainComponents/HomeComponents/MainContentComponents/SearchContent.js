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
    establishments:[{id: null}]
  }

  componentDidMount(){
    this.getEstablishments()
  }

  checkIn = (establishmentId) => {
    console.log(`Checking into establishment ${establishmentId}`)
    /// Use Optimistic rendering for better UX
    this.props.checkedIn({"id":this.props.userID, "establishment_id": establishmentId})
    fetch(API_URL.checkIn,
      {method: "POST",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${this.props.token}`},
      body: JSON.stringify({"UserId": this.props.userID, "establishmentId": establishmentId})})
      .then(response => response.json())
      .then(info =>{
        console.log(info)
        let visit = {"id": info["visit"]["id"], "establishment_id": info["visit"]["establishment_id"], "user_id": info["visit"]["user_id"] }
        /// still want to verify actual check ins..and get visit id
        this.props.checkedIn(visit)
      })
  }

  checkOut = () => {

  }


  renderEstablishmentCards = () =>{
    return (
      this.state.establishments.map(establishment => {
        if (establishment.id != null)
        {
          return <EstablishmentCard active= {establishment.id == this.props.currentVisit.establishment_id} checkIn ={this.checkIn} checkOut = {this.checkOut} key = {`es_${establishment.id}`} establishment={establishment}/>
        }
        else
          return null
      },this)
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
      <Paper style={{minWidth:"10vw",minHeight:"90vh",maxHeight:"90vh",overflow: 'auto'}} >
        <Grid container
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={0}
          style={{minWidth:"80%", minHeight:"80%"}}>

          {this.renderEstablishmentCards()}

        </Grid>
      </Paper>
    )
  }
}
