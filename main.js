import { UI } from './ui.js';
import { API } from './api.js';



const ui = new UI(
  document.querySelector('.form'),
  document.querySelector('.search-input'),
  document.querySelector('.weather')
);

const api = new API();

const run = () => {
  console.log('run');

  ui.onSubmit(async (cityName) => {
    console.log('city: ', cityName);

    const cityWeather = await api.getCityWeather(cityName);
    console.log('city weather', cityWeather);
    ui.renderCityWeather(cityWeather);
  });
};

run();
