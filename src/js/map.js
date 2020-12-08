// Initialize and add the map
function initMap() {
    const COORDINATES = { lat: 40.801485408197856, lng: -73.96745953467104 };
    const MAP_OPTIONS = {
      zoom: 15,
      center: new google.maps.LatLng(COORDINATES), //change the coordinates
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
    };
    const map = new google.maps.Map(document.getElementById("contact__map"), MAP_OPTIONS);
    const marker = new google.maps.Marker({
      map: map,
      position: COORDINATES, //change the coordinates
    });
  }
  
  document.addEventListener('DOMContentLoaded', initMap);
  