import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Polygon} from 'google-maps-react';
import mapStyles from '../styles/mapStyles.js';

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
            style={{ position: 'fixed !important', height: '100%' }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            scaleControl={false}
            zoomControl={false}
            scaleControl={false}
            disableDoubleClickZoom={true}
            className='map'
          >
            <Marker name={'Queue'} position={{lat: '37.759703', lng: '-122.428093'}} />

            <Marker
              title={'Party'}
              name={'Party'}
              icon={{url: 'http://www.2273records.com/wp-content/uploads/2016/07/svg-icon-small.png'}}
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

//extra apiKey just in case:
//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
