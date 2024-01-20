// public/script.js

console.log("hello world");


async function fetchWeather(latitude, longitude) {
    const response = await fetch(`/weather?lat=${latitude}&lon=${longitude}`);
    
    if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return;
    }
    
    const data = await response.json();
    
    document.getElementById('apiData1').innerHTML = 'Current Weather: ' + data.current.weather[0].description + '<br>' + 'Current Temperature: ' + data.current.temp + ' °C';
    
    // All the data from the API call for current
    console.log(`Current weather: ${data.current}`);
    console.log(data.current);
}


async function fetchRandomPostcode() {
    try {
        const response = await fetch("/randomPostcode");
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        
        document.getElementById("apiData2").innerHTML = data.postcode;
        document.getElementById("apiData3").innerHTML = data.longitude;
        document.getElementById("apiData4").innerHTML = data.latitude;
        
        fetchWeather(data.latitude, data.longitude);

        // Google map section

        const googleAPIKey = `AIzaSyDcbd-8Rx1dTuVngfg8Qg_wfiQyXH1uJeQ`;

        // Google map src
        // const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleAPIKey}&q=${data.latitude},${data.longitude}`;

        // Google Street View src
        const googleMapSrc = `https://www.google.com/maps/embed/v1/streetview?key=${googleAPIKey}&location=${data.latitude},${data.longitude}&heading=210&pitch=10&fov=35`;

        document.getElementById('googleMap').src = googleMapSrc;

        console.log(data);
    } catch (error) {
        console.error("Error fetching random postcode:", error.message);
    }
}

fetchRandomPostcode();
// fetchWeather();

