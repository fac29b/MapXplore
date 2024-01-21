# Travel Mashup Project

The Travel Mashup project is a web application that provides information about the weather at random locations found via postcode. Additionally, the application displays the location on a Google Map and provides a Google Street View.

## Technologies Used

- Node.js
- Express.js
- Fetch API for making HTTP requests
- HTML, CSS, JavaScript for the front-end
- Mocha and Chai for testing

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

4. Create a `.env` file in the root directory and add the following API keys:

```env
openweathermapAPI=your_openweathermap_api_key
googleAPI=your_google_api_key
```

Replace `your_openweathermap_api_key` and `your_google_api_key` with your actual API keys.

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

## FAC Foundation final project

Project brief includes displaying APIs on a static HTML page

[Project brief](https://foundersandcoders.notion.site/FAC29B-Server-Side-Dynamic-Web-Application-Project-ef144d4b5886459ab394b163f41f88aa)

## Contributing

If you would like to contribute to the project, feel free to fork the repository and submit a pull request. We welcome any improvements or new features!

## License

This project is licensed under the [MIT License](LICENSE).