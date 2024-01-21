// test/server.test.js
import { expect } from "chai";
import fetch from "node-fetch";
import { app } from "../server.js"; // Assuming your server file is in the root directory

describe("Server API endpoints", () => {
  it("should return weather data for /weather endpoint", async () => {
    const response = await fetch(
      "http://localhost:3000/weather?lat=51.5072&lon=0.1276",
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data).to.have.property("current");
  });

  it("should return random postcode data for /randomPostcode endpoint", async () => {
    const response = await fetch("http://localhost:3000/randomPostcode");
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data).to.have.property("postcode");
    expect(data).to.have.property("longitude");
    expect(data).to.have.property("latitude");
  });

  it("should fail for a non-existent endpoint", async () => {
    const response = await fetch("http://localhost:3000/nonExistentEndpoint");
    const data = await response.json(); // Assuming your server returns JSON for 404 errors
    expect(response.status).to.equal(404);
    // Add more specific assertions based on your error handling logic
  });
});
