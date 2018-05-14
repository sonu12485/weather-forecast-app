import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import SelectedCity from './reducer_selectedWeather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  selectedCity : SelectedCity
});

export default rootReducer;
