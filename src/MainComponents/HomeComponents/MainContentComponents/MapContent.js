import ReactMapBoxGl, {Layer, Feature} from "react-mapbox-gl"
import API_KEYS from '../../../Constants/config.js'
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const Map = ReactMapBoxGl({
  accessToken: API_KEYS.MAP_BOX_PUBLIC
})





export default class MapContent extends Component {

  componentDidMount(){

  }

  render(){
    return(
      <Paper style={{minWidth:"90%",minHeight:"90%"}}>
        <Map
        style="mapbox://styles/czimmerdev/cjpvmddhk0v492so5217p1rcf"
        containerStyle={{textAlign:"justify", height: "80vh", width: "57.5vw"}}
        center={[-73.985130,40.758896,]}>
        </Map>
      </Paper>
    )
  }

}
