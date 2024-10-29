import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherDataType } from '../models/WeatherDataType';
import { GeoResponseType } from '../models/GeoResponseType';

const useFetchWeather = (cityName: string) => {
    const [weather, setWeather] = useState<WeatherDataType | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const { latitude, longitude } = await getCoordinates(cityName);
                const weatherData = await getWeatherForecast(latitude, longitude);
                setWeather(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
    }, [cityName]);

    return weather;
};

const getCoordinates = async (cityName: string): Promise<GeoResponseType> => {
    const geocodeResponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
            q: cityName,
            key: 'b6ea0db66c6449f2aab3ddc4871dc3ab'
        }
    });
    const { lat, lng } = geocodeResponse.data.results[0].geometry;
    return { latitude: lat, longitude: lng };
};

const getWeatherForecast = async (latitude: string, longitude: string): Promise<WeatherDataType> => {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
            latitude,
            longitude,
            hourly: 'temperature_2m,precipitation,rain,wind_speed_10m'
        }
    });
    return response.data;
};

export default useFetchWeather;
