function buildPositionArray(position) {
   var latLong = [];
   latLong.push(position.coords.latitude);
   latLong.push(position.coords.longitude);
   console.log(latLong);
}

function handle_error(error) {
   console.alert("ERROR: " + error.code);
}

function retrieve_location() {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(buildPositionArray, handle_error);
   }
   else {
      console.alert("This browser does not support geolocation services.");
   }
}