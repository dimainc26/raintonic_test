import { CurrentWeather } from "../models/CurrentWeather";
import { WeatherDataType } from "../models/WeatherDataType";

export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';

export const fetchInit = () => ({
  type: FETCH_INIT,
});

export const fetchSuccess = (payload: WeatherDataType) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const setCurrentWeather = (payload: CurrentWeather) => ({
  type: SET_CURRENT_WEATHER,
  payload,
});

export const getCurrentWeather = (payload: CurrentWeather) => ({
  type: GET_CURRENT_WEATHER,
  payload,
});