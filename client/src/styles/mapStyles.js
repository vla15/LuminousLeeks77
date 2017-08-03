const mapStyles = [
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'landscape.man_made',
    'stylers': [
      {
        'color': '#faf5ed'
      }
    ]
  },
  {
    'featureType': 'poi',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road',
    'stylers': [
      {
        'saturation': '0'
      },
      {
        'gamma': '1.8'
      },
      {
        'weight': '1.00'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'hue': '#ffb200'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'lightness': '0'
      },
      {
        'gamma': '1'
      }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit.station.airport',
    'stylers': [
      {
        'hue': '#b000ff'
      },
      {
        'saturation': '23'
      },
      {
        'lightness': '-4'
      },
      {
        'gamma': '0.80'
      }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      {
        'color': '#a0daf2'
      }
    ]
  }
];

module.exports = mapStyles;
