import React from 'react';
import { withRouter } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import {IconLocation}  from './IconLocation'
//import L from 'leaflet';

const Geo = require("open-street-map-reverse-geo-node-client");
const reverse = new Geo.ReverseGeocoder();

const style = {
  map: {
    height: '400px',
    width: '100%'
  }
}

class MapView extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      coordenadas: '',
      addres: '',
      latitud: '',
      longitud: ''
    };

    this.mandarPos = this.mandarPos.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

    addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})

    this.setState({currentPos:e.latlng})
  
    this.setState({latitud: e.lat})
    this.setState({longitud: e.lng})

     console.log(e.latlng.lng)
     
     console.log(e.latlng.lat)
    }

      handleClick(e){
    this.setState({currentPos:e.latlng})
    console.log(this.state.currentPos.lat);

    this.setState({latitud: e.lat})
    console.log(e.latlng.lng)
    this.setState({longitud: e.lng})

    reverse
      .getReverse(this.state.currentPos.lat, this.state.currentPos.lng)
      .then(location => {
        this.setState({addres:location.displayName})
        console.log(this.state.addres)
      })
      .catch(err => {
        console.error(err)
      })
      this.addMarker(e);
  }

   mandarPos() {
    this.props.callback({
      lat: this.state.currentPos.lat,
      lng: this.state.currentPos.lng
    });
  }

   render() {
      return (
        <Map 
          center={[3.4583251, -76.5139801]} 
          onClick={this.handleClick}
          onSelect = {this.mandarPos}
          zoom={13} 
          style={style.map}
          >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.markers.map((position, idx) => 
          <Marker draggable  key={`marker-${idx}`} position={position} icon={IconLocation} >

          <Popup>
            {this.state.addres}
          </Popup>

        </Marker>
        )}
      </Map>
    );
  }
}

export default withRouter(MapView)
