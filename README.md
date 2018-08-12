# Neighborhood-Map-React

## Table of Contents
* [Overview](#project-overview)
* [Features](#features)
* [Project Instruction](#project-instruction)
* [Updates](#updates)
* [Reference](#reference)

## Project Overview

This is a single page web app that is built by ReactJS. It retrieves data and images from Google Maps API and Foursquare API.
This Neighborhood Map includes more than 10 restaurant that I am interested within my neighborhood. These locations are showed by default when the page is loaded.

## Updates
### 8/12/2018
- df94f10 docs: Remove all console.log()
- 7183d6d feat: Add retro style to the map
- 47a870f feat: Add Location List to the map
- db62f81 feat: Add style to search-field
- bfa30da feat: Add an input field to filter out restaurants
- 62c9521 feat: Add Info Window and Foursquare API

### 8/11/2018
- 1d68f69 feat: Add markers on the map
- 041919f feat: First commit

## How to run this project
1. Git clone https://github.com/kchan167/neighborhood-map.git
2. Run npm install
3. Run npm start

## Features

1. Display and mark multiple restaurants on the map
2. Input restaurant's name or food category to filter the markers on the map
3. Toggle restaurant list
4. Toggle infowindow with details fetched from [Foursquare APIs](https://developer.foursquare.com/).

## Project Instruction
- [Project Rubic](https://review.udacity.com/#!/rubrics/1351/view)

1. Write code required to add a full-screen map to your page using the Google Maps API. For sake of efficiency, the map API should be called only once.
You will need to get a Google Maps API key, and include it as the value of the key parameter when loading the Google Maps API. You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. It is not technically possible to make anything secret on the client-side.
Write code required to display map markers identifying at least 5 locations that you are interested in within this neighborhood. Your app should display those locations by default when the page is loaded.

2. Implement a list view of the set of locations defined in step 5.

3. Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real time. Providing a search function through a third-party API is not enough to meet specifications. This filter can be a text input or a dropdown menu.

4. Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked (ex: Yelp reviews, Wikipedia, Flickr images, etc). Note that StreetView and Places don't count as an additional 3rd party API because they are libraries included in the Google Maps API. If you need a refresher on making AJAX requests to third-party servers, check out our Intro to AJAX course. Please provide attribution to the data sources/APIs you use. For example if you are using Foursquare, indicate somewhere in your interface and in your README that you used Foursquare's API.

5. The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map marker with additional information.

## Reference

[Implementing the constructor for a React.Component](https://reactjs.org/docs/react-component.html#constructor)
