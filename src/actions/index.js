import axios from 'axios';

const API_KEY = 'a274b35dd6392747d6f297cd2ac83a94';
const ROOT_URL= `https://api.openweathermap.org/data/2.5/forecast`;

export function fetchWeather(city,country_code)
{
    const url = `${ROOT_URL}?q=${city},${country_code}&appid=${API_KEY}`;

    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}

export function selectWeather(selectedCity)
{
    return {
        type: 'SELECT_WEATHER',
        payload: selectedCity
    };
}

