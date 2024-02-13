//initialize the map

var map = L.map('map').setView([41, -99.0], 8);

//add tile layer replace with your own
const key = 'YOUR_MAPTILER_API_KEY_HERE';
const map = L.map('map').setView([41,--99], 8); //starting position
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=9fmCrHWeAxikTj7LEmUA',{ //style URL
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);

  // load GeoJSON from an external file

  $.getJSON("NETorn.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
 