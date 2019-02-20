window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimeZone = document.querySelector(".location-timezone");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "http://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/7d2c91bde06dd6e1113676f247df2749/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { temperature, summary } = data.currently;
          //Set DOM elements from API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimeZone.textContent = data.timezone;
        });
    });
  }
});
