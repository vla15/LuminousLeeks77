import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.loadMap = this.loadMap.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      //google is available
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      // let zoom = 14;
      // let lat = 37.774929;
      // let lng = -122.419416;
      // const center = new maps.LatLng(lat, lng);
      // const mapConfig = Object.assign({}, {
      //   center: center,
      //   zoom: zoom
      // });
      // this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }
  mapReady(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    window.map = map;
    window.google = google;
    // this.props.updateCenter(this.props.currentCenter);
  }

  onMarkerClick(props, marker, e) {
    let context = this;
    context.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {

    let triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];
    const style = {
      width: '100vw',
      height: '100vh'
    };

    if (!this.props.loaded) {
      return (
        <div>
          Loading Queue App Map ...
        </div>
      );
    } else {
      return (
        <div style={style}>
          <Map 
            google={this.props.google} 
            zoom={13}
            centerAroundCurrentLocation={true} 
            // initialCenter={{
            //   lat: 40.854885,
            //   lng: -88.081807
            // }}
            visible={true}
            onReady={this.mapReady.bind(this)}
            onClick={this.onMapClicked} //write this function
          >
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'Party'}
              position={{lat: '37.778519', lng: '-122.405640'}}
              onMarkerClick={this.onMarkerClick.bind(this)}
            />

            <Marker
              name={'Queue'}
              position={{lat: '37.759703', lng: '-122.428093'}} 
              onMarkerClick={this.onMarkerClick.bind(this)}
            />

            <InfoWindow
              // marker={this.props.activeMarker}
              visible={this.state.showInfoWindow}
              onClose={this.state.onInfoWindowClose}
            >
              <div>
              </div>
            </InfoWindow>

          </Map>
        </div>
      );
    }
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7eJbU4lKofyW1dqgbLWx-MhaeRvYW_Uw'
})(MapContainer);



/*
{props.redux.queues.map((marker,i) => (
  <Marker
    key={i}
    position={marker.location}
    time={marker.time}
    onClick={() => props.onMarkerClick(marker)}
  >
}

*/






//extra apiKey just in case:
//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo