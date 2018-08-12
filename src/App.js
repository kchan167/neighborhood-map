import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        window.initMap = this.initMap;
        loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDycViN-IRd_OIGQ8c12Y4CL-Ppbadx0j0&callback=initMap')
    }

    initMap() {
        var self = this;
        var mapview = document.getElementById('map');
        mapview.style.height = window.innerHeight + "px";
        var map = new window.google.maps.Map(mapview, {
            center: {lat: 37.693399, lng: -122.468597},
            zoom: 15,
            mapTypeControl: false
        });
    }

  render() {
    return (
      <div className="App">
        <div id="map"></div>
      </div>
    );
  }
}

export default App;

/**
 * Load the google maps Asynchronously
 * @param {url} url of the google maps script
 */
function loadMapJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
        document.write("Error: Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}
