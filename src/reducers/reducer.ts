import { CurrentWeather } from '../models/CurrentWeather';
import { WeatherDataType } from '../models/WeatherDataType';
import { GET_CURRENT_WEATHER, FETCH_INIT, FETCH_SUCCESS, SET_CURRENT_WEATHER } from './actions';

interface WeatherState {
  weather: WeatherDataType | null;
  currentWeather: CurrentWeather | null;
  isLoading: boolean;
}

type WeatherAction =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: WeatherDataType }
  | { type: 'SET_CURRENT_WEATHER'; payload: CurrentWeather }
  | { type: 'GET_CURRENT_WEATHER'; };

export const weatherReducer = (state: WeatherState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, weather: action.payload, isLoading: false };
    case SET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload };
    case GET_CURRENT_WEATHER:
      return { ...state};
    default:
      return state;
  }
};
