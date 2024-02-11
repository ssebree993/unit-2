// Initialize and add the map

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//add tile layer...Have my own key; what is your.mapbox.project.id?
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1Ijoic2tzZWJyZWUiLCJhIjoiY2xzaTNmbGJ5MmR5dTJrbzZiems0Zm4yZCJ9.-wktxrXM5TNNPQh1uJKsfA}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/sksebree/clg1mlktf000701mny0p5rvox',
    accessToken: 'pk.eyJ1Ijoic2tzZWJyZWUiLCJhIjoiY2xzaTNmbGJ5MmR5dTJrbzZiems0Zm4yZCJ9.-wktxrXM5TNNPQh1uJKsfA'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);