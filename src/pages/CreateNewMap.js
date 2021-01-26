import React, { useState, useEffect } from "react";
import ol from 'ol-geocoder';

////// variables //////

var allBooks = [
  {
    title: "A Song Below Water",
    author: "Author",
    ISBN: "ISBN One",
    coord: [-13656028.909742799, 5703798.986450608],
    address: "<span class=\"gcd-road\">Portland, Metro, Oregon, United States</span>"
  }
];

var currentBook = {
    title: "New",
    author: "New",
    ISBN: "New",
    coord: undefined,
    address: undefined
};

///////////////////////

export default function mapPage(){
  ((win, doc) => {
    const olview = new ol.View({
      center: [0, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 20,
    });

    console.log("one");
  
    const baseLayer = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });
  
    // new map
    const map = new ol.Map({
      target: doc.querySelector('#root'), // #map
      view: olview,
      layers: [baseLayer],
    });
  
    const popup = new ol.Overlay.Popup(); // the search bar container i think
  
    // Instantiate with some options and add the Control
    const geocoder = new Geocoder('nominatim', {
      provider: 'osm',
      targetType: 'text-input',
      lang: 'en',
      placeholder: 'Search for a city or country',
      limit: 5,
      keepOpen: false,
    });
  
    map.addControl(geocoder); // the search bar text interpreter
    map.addOverlay(popup); // the search bar container
  
    // Listen when an address is chosen
    geocoder.on('addresschosen', (evt) => {
      window.setTimeout(() => {
        popup.show(evt.coordinate, evt.address.formatted); // evt.coordinate is the location coordinate, evt.address.formatted puts the marker text inside <spans>
      }, 2000);
      currentBook.coord = evt.coordinate;
      currentBook.address = evt.address.formatted;
      allBooks.push(currentBook);
      console.log(allBooks);
    });
  })(window, document);

};

//////////////////////
