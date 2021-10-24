import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  // map is rendered in <div id="map">
  target: 'map',
  layers: [ // four basic types, visual representation of data from a source
    new TileLayer({
      source: new OSM() // to get remote data for a layer, using ol/source/Source subclasses
    })
  ],
  // view is for centre, zoom level and projection of the map
  view: new View({
    center: [0, 0],
    zoom: 2
    // also has projection option which determines the coordinate system of the centre and units for calcs
  })
});

// Google Geocoding API to get coordinates: https://developers.google.com/maps/documentation/geocoding/overview
// OpenLayers icon at coordinate: https://openlayers.org/en/latest/examples/geographic.html

// new Map({
//   layers: [
//     new TileLayer({source: new OSM()})
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2
//   }),
//   target: 'map'
// });