import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Constructor
    // Reference: https://reactjs.org/docs/react-component.html#constructor
    constructor(props) {
        super(props);
        this.state = {
            'locations': [
                {
                    'name': "In-N-Out Burger",
                    'type': "Hamburger Restaurant",
                    'latitude': 37.688160,
                    'longitude': -122.472008,
                    'streetAddress': "260 Washington St, Daly City, CA 94015"
                },
                {
                    'name': "Carl's Jr",
                    'type': "Fast Food Restaurant",
                    'latitude': 37.69228,
                    'longitude': -122.4713,
                    'streetAddress': "2434 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Val's Restaurant & Lounge",
                    'type': "American Restaurant",
                    'latitude': 37.691690,
                    'longitude': -122.471279,
                    'streetAddress': "2468 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "City Kebabs & Gyros",
                    'type': "Mediterranean Restaurant",
                    'latitude': 37.693103,
                    'longitude': -122.471270,
                    'streetAddress': "2408 Junipero Serra Blvd A, Daly City, CA 94015"
                },
                {
                    'name': "Miss Tomato Sandwich Shop",
                    'type': "Sandwich Shop",
                    'latitude': 37.693165,
                    'longitude': -122.472085,
                    'streetAddress': "199 87th St, Daly City, CA 94015"
                },
                {
                    'name': "Krispy Kreme Doughnuts",
                    'type': "Bakery",
                    'latitude': 37.688781,
                    'longitude': -122.471586,
                    'streetAddress': "1575 Sullivan Ave, Daly City, CA 94015"
                },
                {
                    'name': "Mr. Pizza Man",
                    'type': "Pizza Delivery",
                    'latitude': 37.692921,
                    'longitude': -122.475123,
                    'streetAddress': "321 87th St, Daly City, CA 94015"
                },
                {
                    'name': "Sam's Sandwiches & Coffee",
                    'type': "Sandwich Shop",
                    'latitude': 37.693108,
                    'longitude': -122.474726,
                    'streetAddress': "301 87th St, Daly City, CA 94015"
                },
                {
                    'name': "IHOP",
                    'type': "American Restaurant",
                    'latitude': 37.693453,
                    'longitude': -122.471718,
                    'streetAddress': "2398 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Jade Dragon Restaurant",
                    'type': "Chinese Restaurant",
                    'latitude': 37.693911,
                    'longitude': -122.471704,
                    'streetAddress': "2368 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Fil-Am Cuisine",
                    'type': "Filipino Restaurant",
                    'latitude': 37.693499,
                    'longitude': -122.465582,
                    'streetAddress': "66 School St, Daly City, CA 94014"
                },
                {
                    'name': "Chick N Coop",
                    'type': "American Restaurant",
                    'latitude': 37.690343,
                    'longitude': -122.466018,
                    'streetAddress': "2434 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "El Taconazo",
                    'type': "Mexican Restaurant",
                    'latitude': 37.690169,
                    'longitude': -122.466134,
                    'streetAddress': "7384 Mission St, Daly City, CA 94014"
                }
            ],
            'map': '',
            'infowindow': '',
            'hightLightMarker': ''
        };

        this.initMap = this.initMap.bind(this);
    }

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

        var InfoWindow = new window.google.maps.InfoWindow({});
        window.google.maps.event.addListener(InfoWindow, 'closeclick', function() {
            self.closeInfoWindow();
        })

        this.setState({
            'map': map,
            'infowindow': InfoWindow
        });

        window.google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            window.google.maps.event.trigger(map, "resize");
            self.state.map.setCenter(center);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            self.closeInfoWindow();
        });

        var alllocations = [];
        this.state.locations.forEach(function (location) {
            var longname = location.name + ' (' + location.type + ')';
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(location.latitude, location.longitude),
                animation: window.google.maps.Animation.DROP,
                map: map
            });

            marker.addListener('click', function() {
                self.openInfoWindow(marker);
            });

            location.longname = longname;
            location.marker = marker;
            location.display = true;
            alllocations.push(location);
        });
        this.setState({
            'alllocations': alllocations
        });
    }

    openInfoWindow(marker) {
        this.closeInfoWindow();
        this.state.infowindow.open(this.state.map, marker);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        this.setState({
            'bouncingMarker': marker
        });
        this.state.infowindow.setContent('Loading Data...');
        this.state.map.setCenter(marker.getPosition());
        this.state.map.setZoom(17);
        this.getMarkerInfo(marker);
    }

    closeInfoWindow() {
        if(this.state.bouncingMarker) {
            this.state.bouncingMarker.setAnimation(null);
        }
        this.setState({
            'bouncingMarker': ''
        });
        this.state.infowindow.close();
    }

    getMarkerInfo(marker) {
        var self = this;
        var test = '<b>Testing</b>';
        self.state.infowindow.setContent(test);
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
