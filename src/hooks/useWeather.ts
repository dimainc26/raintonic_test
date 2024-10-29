import { useEffect, useReducer } from "react";
import { weatherReducer } from "../reducers/reducer";
import { initialState } from "../functions/initialState";
import useFetchWeather from "./useFetchWeather";
import { CurrentWeather } from "../models/CurrentWeather";


const useWeather = (cityName: string) => {
    const [state, dispatch] = useReducer(weatherReducer, initialState);


    const weatherData = useFetchWeather(cityName);

    useEffect(() => {
        dispatch({ type: 'FETCH_INIT' });

        if (weatherData) {
            dispatch({ type: 'FETCH_SUCCESS', payload: weatherData });
            const now = new Date();
            const currentHour = `${now.toISOString().split(':')[0]}:00`;
            const currentIndex = weatherData.hourly.time.findIndex(time => time === currentHour);
      
            if (currentIndex !== -1) {
              const currentWeatherData: CurrentWeather = {
                time: weatherData.hourly.time[currentIndex],
                temperature: weatherData.hourly.temperature_2m[currentIndex],
                windSpeed: weatherData.hourly.wind_speed_10m[currentIndex],
                precipitation: weatherData.hourly.precipitation[currentIndex],
                rain: weatherData.hourly.rain[currentIndex]
              };
              dispatch({ type: "SET_CURRENT_WEATHER", payload: currentWeatherData });
            }
          }
    }, [cityName, weatherData]);

    return state;
};

export default useWeather;
