
var allBooks = [
  {
    title: "Book One",
    author: "Author One",
    ISBN: "One"
  },
  {
    title: "Book Two",
    author: "Author Two",
    ISBN: "Two"
  }
];

var currentBook = {
  title: "new",
  author: "new",
  ISBN: "new"
};

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

  // new map
  const map = new ol.Map({
    target: doc.querySelector('#map'),
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
      popup.show(evt.coordinate, evt.address.formatted); // evt.coordinate is the location coordinate, evt.address.formatted puts the marker text
    }, 2000);
    allBooks.push(currentBook);
    console.log(allBooks);
  });
})(window, document);

// popup.show(evt.coordinate, evt.address.formatted); this is what displays the markers on the map - I think