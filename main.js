const API_KEY = '31a3b5171347b9f7833720542ed1be42';

const q = 'Yahotyn'

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;



class UI {
    #formElement = null;
    #inputElement = null;
    #input = '';

    constructor(formElement, inputElement) { 
        this.#formElement = formElement;
        this.#inputElement = inputElement;

        this.#subscribeToInputChange();
    }

    #subscribeToInputChange() {
        this.#inputElement.addEventListener('keyup', (event) => { 
            this.input = event.target.value;
        })
    }

    onSubmit(callback) {
        this.#formElement.addEventListener('submit', (event) => { 
            event.preventDefault();
            callback(this.#input);


        });
    }

    renderCityWeather(cityWeather) {

    }
}

class API {
    getCityWeather(cityName) {

    }

}

const ui = new UI(
    document.getElementsByClassName('search'),
    document.getElementsByClassName('search-input')
);
const api = new API();




const run = () => {
    console.log('run');

    ui.onSubmit(async (cityName) => {

        const cityWeather = await api.getCityWeather(cityName);
        ui.renderCity(cityWeather);
    });
    
 }