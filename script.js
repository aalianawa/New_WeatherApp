document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '9fd0a6c185a9cb76bb9ce01a1ceb7e46';
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
  
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
  
      
  
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
      }

      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
      }

      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
      }

      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
      }

      document.querySelector(".weather").style.display = "block";

    }
  
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
  });
  
























// const apiKey = '9fd0a6c185a9cb76bb9ce01a1ceb7e46';
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
// }

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })








































// // // script.js

// // document.getElementById("fetchWeather").addEventListener("click", function () {
// //     const locationInput = document.getElementById("locationInput").value;

// //     if (locationInput) {
// //         fetchWeatherData(locationInput);
// //     } else {
// //         alert("Please enter a location.");
// //     }
// // });

// // function fetchWeatherData(location) {
// //     // Replace 'YOUR_API_KEY' with your actual API key
// //     const apiKey = 'e32f0ef77ee4487095d103618230112';
// //     const apiUrl = `https://api.weatherapi.com/v1/current.json?key=%20e32f0ef77ee4487095d103618230112&q=khairpur`;

// //     fetch("https://api.weatherapi.com/v1/current.json?key=%20e32f0ef77ee4487095d103618230112&q=khairpur")
// //         .then((response) => response.json())
// //         .then((data) => {
// //             const weatherInfo = document.getElementById("weatherInfo");
// //             const weatherData = document.getElementById("weatherData");

// //             const temperature = data.main.temp;
// //             const description = data.weather[0].description;
// //             const locationName = data.name;

// //             const html = `
// //                 <p>Location: ${locationName}</p>
// //                 <p>Temperature: ${temperature}°C</p>
// //                 <p>Condition: ${description}</p>
// //             `;

// //             weatherInfo.style.display = "block";
// //             weatherData.innerHTML = html;
// //         })
// //         .catch((error) => {
// //             alert("Location not found. Please try again.");
// //             console.error(error);
// //         });
// // }
