import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'


import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import DefaultContent from './MainContentComponents/DefaultContent'
import SearchContent from './MainContentComponents/SearchContent'
import EditProfile from './MainContentComponents/EditProfile.js'
import MapContent from './MainContentComponents/MapContent'


export default class MainContent extends Component {


  state = {
    openTab:"DEFAULT"
  }

  setTab = (tabType) => {
    this.setState({openTab:tabType})
  }

  render() {
    return (
      <>
        {this.state.openTab == "DEFAULT" ? <DefaultContent setTab = {this.setTab} /> : null }
        {this.state.openTab == "SEARCH" ? <SearchContent userId = {this.props.userId} currentVisit = {this.props.currentVisit} checkedIn={this.props.checkedIn} checkedOut={this.props.checkedOut} token = {this.props.token} setTab = {this.setTab} /> : null}
        {this.state.openTab == "EDIT" ? <EditProfile token = {this.props.token} userId = {this.props.userId}/ > : null}
        {this.state.openTab == "MAP" ? <MapContent token = {this.props.token} userId = {this.props.userId}/ > : null}
      </>
    )
  }
}
