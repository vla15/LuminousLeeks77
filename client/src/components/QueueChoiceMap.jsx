import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { CloseQueueButton } from '../components/CloseQueueButton.jsx';
import { OpenQueueButton } from '../components/OpenQueueButton.jsx';
import mapStyles from '../styles/mapStyles.js';
import { colors } from '../colors/colors.jsx';

export class QueueChoiceMap extends React.Component {

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
      return ( <div></div> );
    } else {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={12}
            disableDefaultUI={true}
            centerAroundCurrentLocation={true}
            visible={true}
            onReady={this.mapReady.bind(this)}
            style={{ position: "fixed !important", height: "100%" }}
            styles={this.props.mapStyles}
            scrollwheel={false}
            navigationControl={false}
            mapTypeControl={false}
            zoomControl={true}
            scaleControl={true}
            disableDoubleClickZoom={true}
            className="map"
            defaultCenter={{lat: -33, lng: 151}}
          >

          { this.props.redux.store.queueChoice.queueList.map(queue => {
              return <Marker
                key={queue.id}
                title={queue.name}
                name={queue.name}
                icon={{ path: 'M0,0 0,16 16,16 16,0z', fillColor: colors(queue.name), fillOpacity: 1, scale: 1, strokeColor: colors(queue.name) }}
                position={{lat: queue.lat, lng: queue.lng}}
              />;
            }) }

            <Marker
              title={'Party'}
              name={'Party'}
              icon={{ path: 'M-9,0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0', fillColor: colors(this.props.redux.store.user.first_name), fillOpacity: 1, scale: 1, strokeColor: colors(this.props.redux.store.user.first_name) }}
            />

          </Map>
  
        </div>
      );
    }
  }
}

QueueChoiceMap.defaultProps = { mapStyles: mapStyles };

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7eJbU4lKofyW1dqgbLWx-MhaeRvYW_Uw',
  version: '3.27'
})(QueueChoiceMap);
