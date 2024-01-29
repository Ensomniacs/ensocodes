function initMap() {
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    const styledMapType = new google.maps.StyledMapType(
      [
        {
      featureType: 'administrative',
      elementType: 'labels',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'administrative.neighborhood',
      elementType: 'labels',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{
          hue: '#d1a6bf'
      }, {
          lightness: -9
      }, {
          saturation: 30
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
          hue: '#b5a891'
      }, {
          lightness: -3
      }, {
          saturation: -50
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'poi.business',
      elementType: 'geometry',
      stylers: [{
          hue: '#d2a6be'
      }, {
          lightness: 4
      }, {
          saturation: -5
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'poi.school',
      elementType: 'geometry',
      stylers: [{
          hue: '#dea8a0'
      }, {
          lightness: 17
      }, {
          saturation: -20
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'poi.medical',
      elementType: 'geometry',
      stylers: [{
          hue: '#e49db6'
      }, {
          lightness: 2
      }, {
          saturation: 10
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
          hue: '#ff9c40'
      }, {
          saturation: 0
      }, {
          lightness: 0
      }]
  }, {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{
          hue: '#ffca81'
      }, {
          saturation: 0
      }, {
          lightness: 0
      }]
  }, {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [{
          hue: '#ff99dd'
      }, {
          saturation: 50
      }, {
          lightness: -10
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{
                  visibility: 'off'
      }]
  }, {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{
          hue: '#edbbd3'
      }, {
          lightness: -9
      }, {
          saturation: 50
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{
          hue: '#edbbd2'
      }, {
          lightness: 0
      }, {
          saturation: 0
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'landscape.man_made',
      elementType: 'labels',
      stylers: [{
          hue: '#edbbd2'
      }, {
          lightness: -20
      }, {
          saturation: 50
      }, {
          gamma: 1.0
      }, {
          visibility: 'off'
      }]
  }, {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{
          hue: '#f3bfd9'
      }, {
          lightness: 50
      }, {
          saturation: 80
      }, {
          gamma: 1.0
      }]
  }, {
      featureType: 'landscape.natural',
      elementType: 'labels',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'transit.line',
      elementType: 'all',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{
          visibility: 'off'
      }]
  }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
          hue: '#BEC2FF'
      }, {
          lightness: -5
      }, {
          saturation: 0
      }, {
          gamma: 1.0
      }, {
          visibility: 'simplified'
      }]
  }, {
      featureType: 'water',
      elementType: 'labels',
      stylers: [{
         visibility: 'off'
      }]
  }
      ],
      { name: "Styled Map" },
    );
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 45.501689, lng: -73.567256 },
      zoom: 11,
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
      },
    });
  
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
  }
  
  window.initMap = initMap;
  