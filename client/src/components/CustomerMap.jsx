import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapStyles from '../styles/mapStyles.js';
import { colors } from '../colors/colors.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

export class CustomerMap extends React.Component {

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
            centerAroundCurrentLocation={true}
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: 'fixed !important', height: '100%' }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            zoomControl={false}
            scaleControl={false}
            clickableIcons={true}
            disableDoubleClickZoom={true}
            className='map'
          >

            <Marker
              name={'Queue'}
              position={{ lat: this.props.redux.store.queue.lat, lng: this.props.redux.store.queue.lng }}
              icon={{ path: 'M0,0 0,16 16,16 16,0z', fillColor: colors(this.props.redux.store.queue.name), fillOpacity: 1, scale: 1, strokeColor: colors(this.props.redux.store.queue.name) }}
            />

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

CustomerMap.defaultProps = { mapStyles: mapStyles };

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
  version: '3.27'
})(CustomerMap);
