import React, {Component} from 'react';

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'locations': '',
            'query': 'TEST',
            'show': true,
        };

        this.locationFilter = this.locationFilter.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }
    // Filter Locations based on query
    locationFilter(event) {
        console.log(this.state);
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

    toggleList(){
        this.setState({
            'show': !this.state.show
        });
    }

    render() {
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
            </div>
        );
    }
}

export default LocationList;
