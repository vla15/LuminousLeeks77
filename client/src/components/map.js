import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class CustomerMap extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}, 
    };
    this.loadMap = this.loadMap.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
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
    console.log('Marker Clickedd');
    this.setState({
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
      height: '100%'
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
            // disableDefaultUI={true}
            centerAroundCurrentLocation={true}
            
            // zoomControl={false}
            visible={true}
            onReady={this.mapReady.bind(this)}
            onClick={this.onMapClicked}
          >

            
            <Marker name={'Queue'} position={{lat: '37.759703', lng: '-122.428093'}} />

            <Marker
              title={'Party'}
              name={'Party'}
              icon={{url: 'http://www.2273records.com/wp-content/uploads/2016/07/svg-icon-small.png'}}
              onMarkerClick={this.onMarkerClick.bind(this)}
            />
            
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
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
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo', 
  version: '3.27'
})(CustomerMap);


/*
           <Polygon
              paths={'auto'}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#0000FF"
              fillOpacity={0.35} />
*/

//extra apiKey just in case:
//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
