const MY_API_KEY = "0d4373f0281ac14d697730ec1efb92ce";

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(url);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}${Math.floor(
        data.main.temp
      )}°`;
    }); //fetch = promise
}
function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

//geolocation.getCurrentPosition() 은 두가지 파라미터를 받음 , (성공했을때 , 실패했을때)
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
