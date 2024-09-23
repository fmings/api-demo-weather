// NEED TO DEBUG API CALL
const endpoint = 'https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=o4cljzWMyphR9Wj4JNb1ETspYsNhp49E';

const getWeather = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getWeather;
