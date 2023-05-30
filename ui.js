export class UI {
  #formElement = null;
  #inputElement = null;
  #cardElement = null;

  constructor(formElement, inputElement, cardElement) {
    (this.#inputElement = inputElement), (this.#formElement = formElement), (this.#cardElement = cardElement);
  }

  onSubmit(callback) {
    this.#formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      callback(this.#inputElement.value);
    });
  }

  #buildWeatherIcon(icon) {
    return `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;
   }

  #buildCityWeatherMarkup(cityWeather) {
  
    return `
    
     <figure class="icon-holder">
     <img class='city-icon' src='${this.#buildWeatherIcon(
       cityWeather.weather[0]['icon']
     )}'>
     </figure>
     <div class="all-info">
    <div class="info">
    <div class='tempetarure-holder'>
      <h2 class="temperature">${Math.floor(cityWeather.main.temp)}</h2>
      <sup>°C</sup>
    </div>
        
        <h3 class="city">${cityWeather.name}, ${cityWeather.sys.country}</h3>
    </div>
    <div class="additional-info">
        <div class="humidity">
             <i class="fas fa-tint"></i>
             <span>${cityWeather.main.humidity}%</span>
              <div class="text">
                  
                  <p>Humidity</p>
              </div>
        </div>

         <div class="wind">
             <i class="fas fa-wind"></i>
             <span>${cityWeather.wind.speed} Km/h</span>
             <div class="text">
                 
                 <p>Wind Speed</p>
             </div>
         </div>
         </div>
`;
  }

  renderCityWeather(cityWeather) {
    const weatherBox = document.createElement('div');
    weatherBox.classList.add('weather');
    weatherBox.innerHTML = this.#buildCityWeatherMarkup(cityWeather);
    this.#cardElement.innerHTML = weatherBox.innerHTML;
  }
}
