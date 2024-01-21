// public/script.js

// Fetch description of postcode from openAI API
async function fetchPostcodeDescription() {
  try {
    const response = await fetch(`/openai`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    document.getElementById("apiData5").innerHTML =
      data.choices[0].message.content;
    console.log(response);
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
  document.getElementById("apiData1").innerHTML =
    "Current Weather: " +
    data.current.weather[0].description +
    "<br>" +
    "Current Temperature: " +
    data.current.temp +
    " °C";

  // All the data from the API call for current
  console.log(`Current weather: ${data.current}`);
  console.log(data.current);
}

// Fetch Google Maps
async function fetchGoogleMaps(lat, long) {
  const googleAPIKey = `AIzaSyDcbd-8Rx1dTuVngfg8Qg_wfiQyXH1uJeQ`;
  const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleAPIKey}&q=${lat},${long}`;
  const googleStreetSrc = `https://www.google.com/maps/embed/v1/streetview?key=${googleAPIKey}&location=${lat},${long}&heading=210&pitch=10&fov=35`;

  document.getElementById("googleMap").src = googleMapSrc;
  document.getElementById("googleStreet").src = googleStreetSrc;
}

// Display Postcode Info
async function displayPostcodeInfo(postcode, long, lat) {
    document.getElementById("apiData2").innerHTML = postcode;
    document.getElementById("apiData3").innerHTML = long;
    document.getElementById("apiData4").innerHTML = lat;
}

// Fetch random postcode
async function fetchRandomPostcode() {
  try {
    const response = await fetch("/randomPostcode");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    
    await fetchPostcodeDescription(data);
    await fetchWeather(data.latitude, data.longitude);
    await fetchGoogleMaps(data.latitude, data.longitude);
    await displayPostcodeInfo(data.postcode, data.longitude, data.latitude)

  } catch (error) {
    console.error("Error fetching random postcode:", error.message);
  }
}

fetchRandomPostcode();

// Event listener for the button
document
  .getElementById("fetchButton")
  .addEventListener("click", fetchRandomPostcode);
