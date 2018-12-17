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


export default class SignIn extends Component {


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
        {this.state.openTab == "SEARCH" ? <SearchContent token = {this.props.token} setTab = {this.setTab} /> : null}
      </>
    )
  }
}
