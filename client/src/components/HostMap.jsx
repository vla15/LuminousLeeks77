import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { CloseQueueButton } from '../components/CloseQueueButton.jsx';
import { OpenQueueButton } from '../components/OpenQueueButton.jsx';
import mapStyles from '../styles/mapStyles.js';
import { colors } from '../colors/colors.jsx';

export class HostMap extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

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
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: 'fixed !important', height: '100%' }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            zoomControl={true}
            clickableIcons={true}
            scaleControl={true}
            disableDoubleClickZoom={true}
            className="map"
            defaultCenter={{lat: -33, lng: 151}}
          >

            <Marker
              name={'Queue'}
              position={{ lat: this.props.redux.store.queue.lat, lng: this.props.redux.store.queue.lng }}
              icon={{ path: 'M0,0 0,16 16,16 16,0z', fillColor: colors(this.props.redux.store.queue.name), fillOpacity: 1, scale: 1, strokeColor: colors(this.props.redux.store.queue.name) }}
            />

            { this.props.redux.store.queue.parties.map(party => {
              return <Marker
                onClick={this.onMarkerClick}
                key={party.id}
                title={party.first_name}
                name={party.first_name}
                icon={{ path: 'M-9,0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0', fillColor: colors(party.first_name), fillOpacity: 1, scale: 1, strokeColor: colors(party.first_name) }}
                position={{lat: party.lat, lng: party.lng}}
              />;
            }) }
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div className="info-window">
                {this.state.selectedPlace.name}
              </div>
            </InfoWindow>
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
