function initialize() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(34.8543784,-111.7951384)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(34.869447,-111.7608725);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,

  });
}

google.maps.event.addDomListener(window, 'load', initialize);
