((win, doc) => {
  const olview = new ol.View({
    center: [0, 0],
    zoom: 3,
    minZoom: 2,
    maxZoom: 20,
  });

  const baseLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });
  const map = new ol.Map({
    target: doc.querySelector('#map'),
    view: olview,
    layers: [baseLayer],
  });
  const popup = new ol.Overlay.Popup();

  // Instantiate with some options and add the Control
  const geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    targetType: 'text-input',
    lang: 'en',
    placeholder: 'Search for ...',
    limit: 5,
    keepOpen: false,
  });

  map.addControl(geocoder);
  map.addOverlay(popup);

  // Listen when an address is chosen
  geocoder.on('addresschosen', (evt) => {
    window.setTimeout(() => {
      popup.show(evt.coordinate, evt.address.formatted);
    }, 3000);
  });
})(window, document);



/*import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

((win, doc) => {
  const olview = new ol.View({
    center: [0, 0],
    zoom: 3,
    minZoom: 2,
    maxZoom: 20,
  });

  const baseLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
  });
  const map = new ol.Map({
    target: doc.querySelector('#map'),
    view: olview,
    layers: [baseLayer],
  });
  const popup = new ol.Overlay.Popup();

  // Instantiate with some options and add the Control
  const geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    targetType: 'text-input',
    lang: 'en',
    placeholder: 'Search for ...',
    limit: 5,
    keepOpen: false,
  });

  map.addControl(geocoder);
  map.addOverlay(popup);

  // Listen when an address is chosen
  geocoder.on('addresschosen', (evt) => {
    window.setTimeout(() => {
      popup.show(evt.coordinate, evt.address.formatted);
    }, 3000);
  });
})(window, document);

/*
var olview = new ol.View({ center: [0, 0], zoom: 2 }),
    baseLayer = new ol.layer.Tile({ source: new ol.source.OSM() }),
    map = new ol.Map({
      target: document.getElementById('map'),
      view: olview,
      layers: [baseLayer]
    });
    
// popup
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

var geocoder = new Geocoder('nominatim', {
  provider: 'mapquest',
  key: '__some_key__',
  lang: 'pt-BR', //en-US, fr-FR
  placeholder: 'Search for ...',
  targetType: 'text-input',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);

geocoder.on('addresschosen', function(evt){
  var feature = evt.feature,
      coord = evt.coordinate,
      address = evt.address;
  // some popup solution
  content.innerHTML = '<p>'+ address.formatted +'</p>';
  overlay.setPosition(coord);
});

/*
//Instantiate with some options and add the Control
var geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  lang: 'en',
  placeholder: 'Search for ...',
  limit: 5,
  debug: false,
  autoComplete: true,
  keepOpen: true
});
map.addControl(geocoder);
  
//Listen when an address is chosen
geocoder.on('addresschosen', function (evt) {
	console.info(evt);
  window.setTimeout(function () {
    popup.show(evt.coordinate, evt.address.formatted);
  }, 3000);
});

/*
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});*/