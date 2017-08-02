import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { CloseQueueButton } from '../components/CloseQueueButton.jsx';
import { OpenQueueButton } from '../components/OpenQueueButton.jsx';
import mapStyles from '../styles/mapStyles.js';
import { colors } from '../colors/colors.jsx';

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
      return ( <div></div> );
    } else {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={13}
            disableDefaultUI={true}
            centerAroundCurrentLocation={false}
            center={{ lat: this.props.redux.store.queue.lat, lng: this.props.redux.store.queue.lng }}
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: 'fixed !important', height: '100%' }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            zoomControl={true}
            scaleControl={true}
            disableDoubleClickZoom={true}
            className="map"
            defaultCenter={{ lat: '37.759703', lng: '-122.428093' }}
          >

            <Marker
              name={'Queue'}
              position={{ lat: this.props.redux.store.queue.lat, lng: this.props.redux.store.queue.lng }}
            />

            { this.props.redux.store.queue.parties.map(party => {
              return <Marker
                key={party.id}
                title={party.first_name}
                name={party.first_name}
                icon={{ path: 'M-9,0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0', fillColor: colors(party.first_name), fillOpacity: 1, scale: 1, strokeColor: colors(party.first_name) }}
                position={{lat: party.lat, lng: party.lng}}
              />;
            }) }
          </Map>
          { this.props.redux.store.queue.is_open
            ? <CloseQueueButton redux={this.props.redux} />
            : <OpenQueueButton redux={this.props.redux} /> }
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
