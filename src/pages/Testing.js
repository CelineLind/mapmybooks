//import React, { useState, useEffect } from "react";
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Map from 'ol/Map';
import Geocoder from 'ol-geocoder';
import Overlay from 'ol/Overlay';
import { render } from '@testing-library/react';

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
    const olview = new View({
        center: [0, 0],
        zoom: 3,
        minZoom: 2,
        maxZoom: 20,
    });

    console.log("one");
  
    const baseLayer = new Tile({
        source: new OSM(),
    });

    // new map
    const map = new Map({
        target: document.querySelector('#mapHere'), // #map
        view: olview,
        layers: [baseLayer],
    });

    //const popup = new Overlay.Popup(); // Where is Overlay.Popup??? Where is she hiding?

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
    //map.addOverlay(popup); // the search bar container

    // Listen when an address is chosen
    geocoder.on('addresschosen', (evt) => {
        if (evt.bbox){
            map.getView().fit(evt.bbox, {duration: 500});
        }
        else {
            map.getView().animate({ zoom:14, center: evt.coordinate });
        }
        /*
        window.setTimeout(() => {
            popup.show(evt.coordinate, evt.address.formatted); // evt.coordinate is the location coordinate, evt.address.formatted puts the marker text inside <spans>
          }, 2000);
          currentBook.coord = evt.coordinate;
          currentBook.address = evt.address.formatted;
          allBooks.push(currentBook);
          console.log(allBooks);*/
      });

    return(
        null
    )
}