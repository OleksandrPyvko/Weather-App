const API_KEY = '31a3b5171347b9f7833720542ed1be42';
const q = 'Yahotyn';
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;

export class API {
  #buildUrl(q) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;
  }



  async getCityWeather(cityName) {
    const response = await fetch(this.#buildUrl(cityName));
    const data = await response.json();
    return data;
  }
}
