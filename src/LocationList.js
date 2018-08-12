import React, {Component} from 'react';
import LocationItem from './LocationItem';

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'locations': '',
            'query': '',
            'list': false,
        };

        this.locationFilter = this.locationFilter.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }
    // Filter Locations based on query
    locationFilter(event) {
        this.props.closeInfoWindow();
        const {value} = event.target;
        var locations = [];
        this.props.locations.forEach(function(location){
            if(location.longname.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                locations.push(location);
            }
            else {
                location.marker.setVisible(false);
            }
        });

        this.setState({
            'locations': locations,
            'query': value
        });
    }

    componentWillMount() {
        this.setState({
            'locations': this.props.locations
        });
    }

    toggleList() {
        this.setState({
            'list': !this.state.list
        });
    }

    render() {
        var locationlist = this.state.locations.map(function(listItem, index) {
            return (
                    <LocationItem key={index}
                                  openInfoWindow={this.props.openInfoWindow.bind(this)}
                                  data={listItem}
                    />
            );
        }, this);

        return(
            <div className="search">
                <input role="search"
                       aria-labelledby="filter"
                       id="search-field"
                       className="search-field"
                       type="text"
                       placeholder="Please enter Restaurant's name or food category"
                       onChange={this.locationFilter}
                />
                <ul>
                    {this.state.list && locationlist}
                </ul>
                <button className="button" onClick={this.toggleList}>Toggle List</button>
            </div>
        );
    }
}

export default LocationList;
