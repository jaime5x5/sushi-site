$(document).foundation();
$(document).ready(function() {  
  new Maplace({
    map_div: '#gmap-styled',
    locations: [{
      lat: 47.659381,
      lon: -117.4236639,
      zoom: 18

    }],
    start: 3,
    styles: {
      'Other style': [{
        stylers: [
            { hue: "#00ffe6" },
            { saturation: -20 }
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
      }],
      'Night': [{
        featureType: 'all',
        stylers: [
          { invert_lightness: 'true' }
        ]
      }],
      'Greyscale': [{              
        featureType: 'all',
        stylers: [
          { saturation: -100 },
          { gamma: 0.50 }
        ]
      }]
    }
  }).Load();