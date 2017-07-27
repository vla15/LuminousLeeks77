import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  mapReady(mapProps, map) {
    const {google} = mapProps;
    // const service = new google.maps.places.PlacesService(map);
    window.map = map;
    window.google = google;
    // this.props.updateCenter(this.props.currentCenter);
  }

  render() {
    return (
      <Map 
        google={this.props.google} 
        // zoom={14}
        centerAroundCurrentLocation={true} 
        // initialCenter={{
        //   lat: 40.854885,
        //   lng: -88.081807
        // }}
        onReady={this.mapReady.bind(this)}
        // onClick={this.onMapClicked}
      > 
      </Map>
    );  
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7eJbU4lKofyW1dqgbLWx-MhaeRvYW_Uw'
})(MapContainer);