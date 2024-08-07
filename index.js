function getWeather() {
let cityName = document.getElementById("temp1").value;

     axios.get ( `https://api.weatherapi.com/v1/current.json?key=6c154fe0f61848e0b6160112240508&q=${cityName}&aqi=yes`)
     

  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


