import { useState, useEffect } from 'react';
import useWeather from './useFetchWeather';
import { CurrentWeather } from '../models/CurrentWeather';

const useCurrentWeather = (cityName: string): CurrentWeather | null => {
    const weatherData = useWeather(cityName);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);

    useEffect(() => {
        if (weatherData) {
            const now = new Date();
            const currentHour = `${now.toISOString().split(':')[0]}:00`;
            const currentIndex = weatherData.hourly.time.findIndex(time => time === currentHour);

            if (currentIndex !== -1) {
                const newData = {
                    time: weatherData.hourly.time[currentIndex],
                    temperature: weatherData.hourly.temperature_2m[currentIndex],
                    windSpeed: weatherData.hourly.wind_speed_10m[currentIndex],
                    precipitation: weatherData.hourly.precipitation[currentIndex],
                    rain: weatherData.hourly.rain[currentIndex]
                };
                setCurrentWeather(newData);
            }
        }
    }, [weatherData]);

    return currentWeather;
};

export { useCurrentWeather}