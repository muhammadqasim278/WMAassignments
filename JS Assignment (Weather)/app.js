document.querySelector("#btn").addEventListener("click", () => {
  var input = document.getElementById("input");
 

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=ffd7f424f21c8d237f0f647f9531339c`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      var imgOne = document.getElementById("imgOne");
      if (input.value == "") {
        imgOne.src = "/images/404.png";
      }
      else if (data.weather[0].main === "Smoke") {
        imgOne.src = "/images/mist.png";
      } else if (data.weather[0].main === "Clear") {
        imgOne.src = "/images/clear.png";
      } else if (data.weather[0].main === "Clouds") {
        imgOne.src = "/images/cloud.png";
      } else if (data.weather[0].main === "Snow") {
        imgOne.src = "/images/snow.png";
      } else if (data.weather[0].main === "Rain") {
        imgOne.src = "/images/rain.png";
      } else if (data.weather[0].main === "Mist") {
        imgOne.src = "/images/mist.png";
      }else if (data.weather[0].main === "Haze") {
        imgOne.src = "/images/haze.png";
      }
     

      var tmp = document.getElementById("temp");

      tmp.innerHTML = `${Math.round(data.main.temp)}&#176C`;

      var desc = document.getElementById("desc");
      desc.innerHTML = data.weather[0].description;

      var humidity = document.getElementById("humidity");
      humidity.innerHTML = Math.round(data.main.humidity)+"%";

      var speed = document.getElementById("speed");
      speed.innerHTML = Math.round(((data.wind.speed)/1000)*3600)+" Km/h";


        

    });
});
