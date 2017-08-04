import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { CloseQueueButton } from '../components/CloseQueueButton.jsx';
import { OpenQueueButton } from '../components/OpenQueueButton.jsx';
import mapStyles from '../styles/mapStyles.js';
import { colors } from '../colors/colors.jsx';
import { Button } from 'react-bootstrap';

export class QueueChoiceMap extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
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
            centerAroundCurrentLocation={true}
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: 'fixed !important', height: '100%' }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            zoomControl={false}
            scaleControl={true}
            disableDoubleClickZoom={true}
            clickableIcons={true}
            className="map"
            defaultCenter={{lat: -33, lng: 151}}
          >

            { this.props.redux.store.queueChoice.queueList.map(queue => {
              return <Marker
                onClick={this.onMarkerClick.bind(this)}
                key={queue.id}
                title={queue.name}
                name={queue.name}
                icon={{ path: 'M0,0 0,16 16,16 16,0z', fillColor: colors(queue.name), fillOpacity: 1, scale: 1, strokeColor: colors(queue.name) }}
                position={{lat: queue.lat, lng: queue.lng}}
              />;
            }) }
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                {this.state.selectedPlace.name}
              </div>
            </InfoWindow>
            <Marker
              title={'Party'}
              name={'Party'}
              icon={{ path: 'M-9,0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0', fillColor: colors(this.props.redux.store.user.first_name), fillOpacity: 1, scale: 1, strokeColor: colors(this.props.redux.store.user.first_name) }}
              position={{lat: '37.7836676', lng: '-122.4090455'}}
            />

          </Map>

        </div>
      );
    }
  }
}

QueueChoiceMap.defaultProps = { mapStyles: mapStyles };

// let googleKey;
// if (process.env.GOOGLE_MAP_KEY) {
//   googleKey = process.env.GOOGLE_MAP_KEY
// } else {
//   googleKey = config.GOOGLE_MAP_KEY;
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
  version: '3.27',
})(QueueChoiceMap);
