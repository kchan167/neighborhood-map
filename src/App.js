import React, { Component } from 'react';
import LocationList from './LocationList';
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
                    'streetAddress': "260 Washington St, Daly City, CA 94015"
                },
                {
                    'name': "Carl's Jr",
                    'type': "Fast Food Restaurant",
                    'streetAddress': "2434 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Val's Restaurant & Lounge",
                    'type': "American Restaurant",
                    'streetAddress': "2468 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "City Kebabs & Gyros",
                    'type': "Mediterranean Restaurant",
                    'streetAddress': "2408 Junipero Serra Blvd A, Daly City, CA 94015"
                },
                {
                    'name': "Miss Tomato Sandwich Shop",
                    'type': "Sandwich Shop",
                    'streetAddress': "199 87th St, Daly City, CA 94015"
                },
                {
                    'name': "Krispy Kreme Doughnuts",
                    'type': "Bakery",
                    'streetAddress': "1575 Sullivan Ave, Daly City, CA 94015"
                },
                {
                    'name': "Mr. Pizza Man",
                    'type': "Pizza Delivery",
                    'streetAddress': "321 87th St, Daly City, CA 94015"
                },
                {
                    'name': "Sam's Sandwiches & Coffee",
                    'type': "Sandwich Shop",
                    'streetAddress': "301 87th St, Daly City, CA 94015"
                },
                {
                    'name': "IHOP",
                    'type': "American Restaurant",
                    'streetAddress': "2398 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Jade Dragon Restaurant",
                    'type': "Chinese Restaurant",
                    'streetAddress': "2368 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "Fil-Am Cuisine",
                    'type': "Filipino Restaurant",
                    'streetAddress': "66 School St, Daly City, CA 94014"
                },
                {
                    'name': "Chick N Coop",
                    'type': "American Restaurant",
                    'streetAddress': "2434 Junipero Serra Blvd, Daly City, CA 94015"
                },
                {
                    'name': "El Taconazo",
                    'type': "Mexican Restaurant",
                    'streetAddress': "7384 Mission St, Daly City, CA 94014"
                }
            ],
            'map': '',
            'infowindow': '',
            'bouncingMarker': ''
        };

        // Bind functions to this so they can be passed to component
        this.initMap = this.initMap.bind(this);
        this.openInfoWindow = this.openInfoWindow.bind(this);
        this.closeInfoWindow = this.closeInfoWindow.bind(this);
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
            mapTypeControl: false,
            styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ebe3cd"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#523735"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f1e6"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#c9b2a6"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#dcd2be"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#ae9e90"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dfd2ae"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dfd2ae"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#93817c"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.business",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#a5b076"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#447530"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f1e6"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#fdfcf8"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f8c967"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#e9bc62"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e98d58"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#db8555"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#806b63"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dfd2ae"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8f7d77"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#ebe3cd"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dfd2ae"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#b9d3c2"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#92998d"
                      }
                    ]
                  }
                ]
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
            var clientId = "GQ0W5ZMV5SZD4PIR2PPJMOHSEBIPNARGAF0NVXKITNXYO4QJ";
            var clientSecret = "0ENY13NDVZMVLDRJAOKBEDKRMPYJ5JMGEJGNN4ZZ3BCJQJ3W";
            var url = "https://api.foursquare.com/v2/venues/search?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20180323&limit=1&ll=37.693399,-122.468597&query=" + location.name;
            fetch(url)
                .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.log("Sorry data can't be loaded");
                            return;
                        }

                        // Examine the text in the response
                        response.json().then(function (data) {
                            var location_data = data.response.venues[0];
                            var id = location_data.id;
                            location['id'] = id;
                            location['lat'] = location_data.location.lat;
                            location['lng'] = location_data.location.lng;
                            var longname = location.name + ' (' + location.type + ')';
                            var marker = new window.google.maps.Marker({
                                position: new window.google.maps.LatLng(location.lat, location.lng),
                                animation: window.google.maps.Animation.DROP,
                                map: map
                            });

                            marker['name'] = location.name;
                            marker['id'] = location.id;
                            marker.addListener('click', function() {
                                self.openInfoWindow(marker);
                            });

                            location.longname = longname;
                            location.marker = marker;
                            location.display = true;
                            alllocations.push(location);
                        });
                    }
                )
                .catch(function (err) {
                    console.log("Sorry data can't be loaded");
                });
        });
        this.setState({
            'locations': alllocations
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
        var clientId = "GQ0W5ZMV5SZD4PIR2PPJMOHSEBIPNARGAF0NVXKITNXYO4QJ";
        var clientSecret = "0ENY13NDVZMVLDRJAOKBEDKRMPYJ5JMGEJGNN4ZZ3BCJQJ3W";
        var url = "https://api.foursquare.com/v2/venues/"+ marker.id + "?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20180811";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        self.state.infowindow.setContent("Sorry data can't be loaded");
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        var location_data = data.response.venue;
                        var imageUrl = location_data.bestPhoto.prefix + "130x130" + location_data.bestPhoto.suffix;
                        var image = "<p><img width='130' src=" + imageUrl + "/><p>";
                        var name = "<b>Name: <b>" + marker.name + "<br>";
                        var category = "<b>Category: </b>" + location_data.categories[0].name + "<br>";
                        var rating = "<b>Rating: </b>" + location_data.rating + "/10<br>";
                        var totalLikes = "<b>Likes: </b>" + location_data.likes.count + "<br>";
                        var locat = '';
                        var readMore = '<a href="https://foursquare.com/v/'+ marker.id +'" target="_blank">Read More on Foursquare Website</a>';
                        location_data.location.formattedAddress.forEach(function(address, index) {
                            if(index > 0) {
                                locat += ", ";
                            }
                            locat += address;
                        });
                        var formattedAddress = "<b>Address: </b>" + locat + '</p>';

                        self.state.infowindow.setContent("<div id='" + marker.id + "'>" + image + name + category + rating + totalLikes + formattedAddress + readMore + "</div>");
                    });
                }
            )
            .catch(function (err) {
                self.state.infowindow.setContent("Sorry data can't be loaded");
            });
    }

  render() {
    return (
      <div className="App">
        <LocationList key="100"
                      locations={this.state.locations}
                      openInfoWindow={this.openInfoWindow}
                      closeInfoWindow={this.closeInfoWindow}
        />
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
