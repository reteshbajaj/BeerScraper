function verify_geolocation_capability() {
   if (navigator.geolocation) {
      document.form1.capability.value = "Enabled";
   }
   else {
      document.form1.capability.value = "Not Enabled";
   }
}

function display_geolocation_properties(position) {
   var latAndLong = [];
   document.form1.capability.value = "W o r k i n g . . .";
   document.form1.latitude.value = position.coords.latitude;
   document.form1.longitude.value = position.coords.longitude;
   latAndLong.push(position.coords.latitude);
   latAndLong.push(position.coords.longitude);
   console.log(latAndLong);
}

function handle_error(error) {
   document.form1.capability.value = "ERROR: " + error.code;
}

function retrieve_location() {
   if (navigator.geolocation) {
      document.form1.capability.value = "Starting...";
      navigator.geolocation.getCurrentPosition(display_geolocation_properties, handle_error);
      document.form1.capability.value = "Finished";
   }
   else {
      alert("This browser does not support geolocation services.");
   }
}