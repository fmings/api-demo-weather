// NEED TO DEBUG API CALL

import { clientCredentials } from '../utils/client';

const externalApiEndpoint = 'https://api.tomorrow.io/v4/weather/forecast?location=tennessee&timesteps=1d&units=imperial&apikey=nRCbE82IdvMS420087Vcl9rxSKXKWWbi';

// Define a function called 'getWeather' that returns a Promise
const getExternalApiWeather = () =>
  new Promise((resolve, reject) => {
    // Use the Fetch API to make a GET request to the 'endpoint' URL
    fetch(`${externalApiEndpoint}`, {
      method: 'GET', // Specify that this is a GET request
      headers: {
        'Content-Type': 'application/json', // Indicate that we expect JSON data
      },
    })
      // Once the response is received, convert it to JSON format
      .then((response) => response.json())
      // If the conversion is successful, pass the data to the 'resolve' function to fulfill the promise
      .then((data) => {
        // console.warn data to show the data returned from the API
        console.warn('data', data);
        if (data) {
          resolve(Object.values(data.timelines));
        } else {
          resolve([]);
        }
      })
      // If an error occurs at any point, pass it to the 'reject' function to reject the promise
      .catch(reject);
  });

const endpoint = clientCredentials.databaseURL;

const getFirebaseWeather = () =>
  new Promise((resolve, reject) => {
    // Use the Fetch API to make a GET request to the 'endpoint' URL
    fetch(`${endpoint}/weather.json`, {
      method: 'GET', // Specify that this is a GET request
      headers: {
        'Content-Type': 'application/json', // Indicate that we expect JSON data
      },
    })
      // Once the response is received, convert it to JSON format
      .then((response) => response.json())
      // If the conversion is successful, pass the data to the 'resolve' function to fulfill the promise
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      // If an error occurs at any point, pass it to the 'reject' function to reject the promise
      .catch(reject);
  });

export { getExternalApiWeather, getFirebaseWeather };
