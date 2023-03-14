// const argCoords = {
//     lat: -34.397, 
//     lng: 150.644
//   }

//   const inputShared = document.getElementById('place_input')

//   let map;
//   let marker;
//   let autocomplete;



//   function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: argCoords,
//       zoom: 8,
//     });

//     marker = new google.maps.Marker({
//       position: argCoords,
//       map: map
//     })
//     initAutoComplete()
//   }


//   function initAutoComplete(){

//     autocomplete = new google.maps.places.Autocomplete(inputShared)
//     autocomplete.addListener('place_changed', function(){
//       const place = autocomplete.getPlace()
//       map.setCenter(place.geometry.location)
//       marker.setPosition(place.geometry.location)
//     })

//   }