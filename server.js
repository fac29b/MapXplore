// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import OpenAI from "openai";

export const app = express();
dotenv.config();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const weatherAPI = process.env.openweathermapAPI;
const googleAPI = process.env.googleAPI;
const openaiAPI = process.env.openaiAPI;
let globalPostcode = "";

// JSON Endpoints made with Express

// Weather API integration
app.get("/weather", async (req, res) => {
  const { lat, lon } = req.query; // Extract latitude and longitude from the query parameters
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAPI}`,
  ).then((res) => res.json());
  res.json(weatherData);
});

// Postcode API integration
app.get("/randomPostcode", async (req, res) => {
  const randomPostcodeData = await fetch(
    "http://api.postcodes.io/random/postcodes",
  ).then((res) => res.json());
  const { postcode, longitude, latitude, parliamentary_constituency, country } =
    randomPostcodeData.result;

  globalPostcode = postcode;

  // Respond with postcode, longitude, and latitude
  res.json({
    postcode,
    longitude,
    latitude,
    parliamentary_constituency,
    country,
  });
});

// Open AI API Integration
const openai = new OpenAI({
  apiKey: openaiAPI,
});

app.get("/openai", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a friendly travel guide with great knowledge of uk locations. Please give a short description of the uk postcode ${globalPostcode}, talking about information of the postcode and local area. Please resond in 200 words or less.`,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 300,
  });
  res.json(completion);
});
