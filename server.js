// server.js
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
// import { Loader } from "@googlemaps/js-api-loader"

const app = express();

dotenv.config();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// const lat = 51.5072;
// const lon = 0.1276;
// const part = '';
const weatherAPI = process.env.openweathermapAPI;
const googleAPI = process.env.googleAPI;

// JSON Endpoints made with Express

app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query; // Extract latitude and longitude from the query parameters
    const weatherData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAPI}`).then(res => res.json());
    res.json(weatherData);
});

app.get('/randomPostcode', async (req, res) => {
    const randomPostcodeData = await fetch('http://api.postcodes.io/random/postcodes').then(res => res.json());
    
    const { postcode, longitude, latitude } = randomPostcodeData.result;
    
    // Respond with postcode, longitude, and latitude
    res.json({ postcode, longitude, latitude });
});

// app.get('/news', async (req, res) => {
//     const newsData = await fetch('URL_TO_NEWS_API').then(res => res.json());
//     res.json(newsData);
// });



// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch data from API 1
//     fetch('/api1')
//         .then(response => response.json())
//         .then(data => {
//             // Update the content of the first div with data from API 1
//             document.getElementById('apiData1').innerHTML = JSON.stringify(data);
//         })
//         .catch(error => console.error('Error fetching data from API 1:', error));

//     // Fetch data from API 2
//         const latitude = 51.509865; // Replace with the actual latitude
//         const longitude = -0.118092; // Replace with the actual longitude

//     // Second API
//     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=f4e48e65002f6d466b302a58a92f9619`)
//         .then(response => response.json())
//         .then(data => {
//             // Process the historical weather data
//             document.getElementById('apiData2').innerHTML = JSON.stringify(data);
//         })
//         .catch(error => console.error('Error fetching historical weather data:', error));
// });