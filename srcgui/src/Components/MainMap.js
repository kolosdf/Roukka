import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {IconLocation} from './Icon'
//import L from 'leaflet';
//import ModalFormInformacionT from './ModalFormInformacionT';
import axios from "axios";

const Geo = require("open-street-map-reverse-geo-node-client");
const reverse = new Geo.ReverseGeocoder();

let position;
let zoomMap;

export class Mapa extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      lat: 3.42158,
      lng: -76.5205,
      zoom: 18,
      currentPos:'',
      addres:'',
      markers: [],
      latitud: '',
      longitud: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Funcion para añadir marcas al mapa al hacer click
  addMarker = (e) =>{
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  handleClick(e){
    this.setState({currentPos:e.latlng})
    this.setState({latitud: e.lat})
    this.setState({longitud: e.lng})

    this.props.onChange({latitud:this.state.currentPos.lat, longitud:this.state.currentPos.lng})



    reverse
      .getReverse(this.state.currentPos.lat, this.state.currentPos.lng)
      .then(location => {
        this.setState({addres:location.displayName})

      })
      .catch(err => {
        console.error(err)
      })
      this.addMarker(e);
  }



  render() {
    const {lat,lng,zoom} = this.state;
    position = [lat,lng];
    zoomMap = zoom;
    
    return (
      <Map center = {position} zoom = {zoomMap} onclick = {this.handleClick} >               
        <TileLayer attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {this.state.markers.map((position,idx) =>            
          <Marker key={'marker-${idx}'} icon={IconLocation} position = {position} latlng>
            <Popup> 
            <span>
            {this.state.addres}
            </span>
            </Popup>
          </Marker>
        )}
      </Map>
    );
  }
}

