// public/script.js

// Fetch description of postcode from openAI API
async function fetchPostcodeDescription() {
  try {
    const response = await fetch(`/openai`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    document.getElementById("about").innerHTML =
      data.choices[0].message.content;
  } catch (error) {
    console.log("error fetching postcode description", error.message);
  }
}

// Fetch weather from weather API
async function fetchWeather(latitude, longitude) {
  const response = await fetch(`/weather?lat=${latitude}&lon=${longitude}`);

  if (!response.ok) {
    console.error(`Error: ${response.status} - ${response.statusText}`);
    return;
  }

  const data = await response.json();
  document.getElementById("current-weather").innerHTML =
    data.current.weather[0].description;
  document.getElementById("temp-icon").innerHTML =
    `<img src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`;
  document.getElementById("current-temperature").innerHTML = data.current.temp;
}

// Fetch Google Maps
async function fetchGoogleMaps(lat, long, zoom) {
  const googleAPIKey = `AIzaSyDcbd-8Rx1dTuVngfg8Qg_wfiQyXH1uJeQ`;
  const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleAPIKey}&q=${lat},${long}&zoom=${zoom}`;
  const googleStreetSrc = `https://www.google.com/maps/embed/v1/streetview?key=${googleAPIKey}&location=${lat},${long}&heading=210&pitch=10&fov=35`;

  document.getElementById("googleMap").src = googleMapSrc;
  document.getElementById("googleStreet").src = googleStreetSrc;
}

// Display Postcode Info
async function displayPostcodeInfo(postcode, long, lat, constituency, country) {
  document.getElementById("postcode").innerHTML = postcode;
  document.getElementById("constituency").innerHTML = constituency;
  document.getElementById("country").innerHTML = country;
}

// Fetch random postcode
async function fetchRandomPostcode() {
  try {
    const response = await fetch("/randomPostcode");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);

    await fetchPostcodeDescription(data);
    await fetchWeather(data.latitude, data.longitude);
    await fetchGoogleMaps(data.latitude, data.longitude, 9);
    await displayPostcodeInfo(
      data.postcode,
      data.longitude,
      data.latitude,
      data.parliamentary_constituency,
      data.country,
    );
    await unhide();
  } catch (error) {
    console.error("Error fetching random postcode:", error.message);
  }
}

const mainContainer = document.getElementById("main");
const loadContainer = document.getElementById("loading");
const fetchButton = document.getElementById("fetchButton");

async function unhide() {
  loadContainer.classList.contains("hide")
    ? null
    : loadContainer.classList.add("hide");
  mainContainer.classList.remove("hide");
  fetchButton.disabled = false;
}

async function hide() {
  mainContainer.classList.contains("hide")
    ? null
    : mainContainer.classList.add("hide");
  loadContainer.classList.remove("hide");
  fetchButton.disabled = true;
}

fetchRandomPostcode();
hide();

// Event listener for the button

fetchButton.addEventListener("click", () => {
  hide();
  fetchRandomPostcode();
});
