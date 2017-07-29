import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapStyles from '../styles/mapStyles.js';

export class HostMap extends React.Component {

  constructor(props) { super(props); }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
    }
  }

  mapReady(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    window.map = map;
    window.google = google;
    // this.props.updateCenter(this.props.currentCenter);
  }

  render() {
    if (!this.props.loaded) {
      return ( <div> Loading Queue App Map... </div> );
    } else {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={13}
            disableDefaultUI={true}
            centerAroundCurrentLocation={true}
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: "fixed !important", height: "100%" }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            scaleControl={false}
            zoomControl={false}
            scaleControl={false}
            disableDoubleClickZoom={true}
            className="map"
          >

            <Marker name={'Queue'} position={{lat: '37.759703', lng: '-122.428093'}} />

            { this.props.redux.store.queue.parties.map(party => {
              return <Marker
                key={party.id}
                title={party.first_name}
                name={party.first_name}
                icon={{url: 'http://www.2273records.com/wp-content/uploads/2016/07/svg-icon-small.png'}}
                position={{lat: party.lat, lng: party.lng}}
              />;
            }) }
          </Map>
        </div>
      );
    }
  }
}

HostMap.defaultProps = { mapStyles: mapStyles };

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7eJbU4lKofyW1dqgbLWx-MhaeRvYW_Uw',
  version: '3.27'
})(HostMap);
