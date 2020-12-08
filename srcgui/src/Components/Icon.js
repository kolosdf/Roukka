import React from 'react';
import Icon from '../assets/tienda.svg';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

export const IconLocation = L.icon({

  iconUrl: require('../assets/tienda.svg'),
  iconRetinaUrl:  require('../assets/tienda.svg'),
  iconSize: [35,35],
});

