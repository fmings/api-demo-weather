// NEED TO DEBUG API CALL

import { clientCredentials } from '../utils/client';

// const endpoint = 'https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=nRCbE82IdvMS420087Vcl9rxSKXKWWbi';
const endpoint = clientCredentials.databaseURL;

// Define a function called 'getWeather' that returns a Promise
// const getWeather = () =>
//   new Promise((resolve, reject) => {
//         // Use the Fetch API to make a GET request to the 'endpoint' URL
//     fetch(`${endpoint}`, {
//       method: 'GET', // Specify that this is a GET request
//       headers: {
//         'Content-Type': 'application/json', // Indicate that we expect JSON data
//       },
//     })
//       // Once the response is received, convert it to JSON format
//       .then((response) => response.json())
//       // If the conversion is successful, pass the data to the 'resolve' function to fulfill the promise
//       .then((data) => {
//         console.warn('response-data', data)
//         resolve(data)
//       })
//       // If an error occurs at any point, pass it to the 'reject' function to reject the promise
//       .catch(reject);
//   });

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

export default getFirebaseWeather;
