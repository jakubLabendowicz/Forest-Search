function temperature() {
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    var apiKey = "3162734543e0e661642a7ad366e4f669";
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + apiKey + '&lang=pl')
    .then(response => response.json())
    .then(data => data.main)
    .then(data => data.temp)
    .then(data => document.getElementById('temperature').innerHTML = data + '°C');
  }

  function error() {
    console.log('Unable to retrieve your location');
    var apiKey = "3162734543e0e661642a7ad366e4f669";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lublin&units=metric&appid=' + apiKey + '&lang=pl')
    .then(response => response.json())
    .then(data => data.main)
    .then(data => data.temp)
    .then(data => document.getElementById('temperature').innerHTML = data + '°C');
  }

  if(!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(success, error);
  }

  setTimeout("temperature()", 60000);
}

temperature();
