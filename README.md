# Travel Mashup Project

The Travel Mashup project is a web application that provides information about the weather at random locations found via postcode. Additionally, the application displays the location on a Google Map and provides a Google Street View with a ChatGPT powered chat box to also give interactive information about the location.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [How to Run](#how-to-run)
4. [How to Test](#how-to-test)
5. [Deployment on AWS](#deployment-on-aws)
6. [FAC Foundation Final Project](#fac-foundation-final-project)
7. [Contributing](#contributing)
8. [License](#license)

## Technologies Used

- Node.js
- Express.js
- Fetch API for making HTTP requests
- HTML, CSS, JavaScript for the front-end
- Chai for testing
- Various API's used

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
```

2. Navigate to the project directory:

```bash
cd travel-mashup
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the API keys:

```env
openweathermapAPI=your_openweathermap_api_key
OPENAI_API_KEY=your_openAI_api_key
```

Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key.
Replace `your_openAI_api_key` with your actual OpenAI API key.

**Note:** The `googleAPI` key is a front-end API key used and stored in the `public/script.js` file to interact with Google Maps APIs. It is important to secure this API key by restricting its usage to specific IP addresses. To enhance security, consider adding your IP address or the IP address of your server to the API key restrictions on the [Google Cloud Console](https://console.cloud.google.com/). This way, the API key can only be used from your specified IP address, reducing the risk of unauthorized usage.

## How to Run

1. Start the server:

```bash
npm start
```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## How to Test

Run the following command to execute the tests:

```bash
npm test
```

This project uses Mocha and Chai for testing. Ensure that the server is not running while running the tests.

## Deployment on AWS

The Travel Mashup project is deployed on AWS. You can access the deployed application by visiting the following URL:

[Travel Mashup AWS Deployment](http://18.170.214.75:3000/)

To access the deployed application on AWS, you can SSH into the CLI for Amazon, clone the repository using Git commands, and set it to run with PM2.

## FAC Foundation final project

Project brief includes displaying APIs on a static HTML page

[FAC Project brief](https://foundersandcoders.notion.site/FAC29B-Server-Side-Dynamic-Web-Application-Project-ef144d4b5886459ab394b163f41f88aa)

## Contributing

If you would like to contribute to the project, feel free to fork the repository and submit a pull request. We welcome any improvements or new features!

## License

This project is licensed under the [MIT License](LICENSE).
