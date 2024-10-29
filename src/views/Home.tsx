
import useWeather from "../hooks/useWeather";

const Home = () => {
  const {weather, currentWeather} = useWeather("Valvasone");

  if (!currentWeather) {
      return <p>Loading current weather data...</p>;
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weather ? (
        <div>
          <h2>Hourly Temperature for Valvasone:</h2>
          <h2>Current datas:</h2>
          <div>
            <h1>Current Weather in Valvasone</h1>
            <p>Time: {currentWeather.time}</p>
            <p>Temperature: {currentWeather.temperature} °C</p>
            <p>Wind Speed: {currentWeather.windSpeed} km/h</p>
            <p>Precipitation: {currentWeather.precipitation} mm</p>
            <p>Rain: {currentWeather.rain} mm</p>
        </div>
          <ul>
            {weather.hourly.time.map((time, index) => (
              <li key={index}>
                <span>{time} - </span>
                <span>{weather.hourly.temperature_2m[index]} °C, </span>
                <span>Wind: {weather.hourly.wind_speed_10m[index]} m/s, </span>
                <span>
                  Precipitation: {weather.hourly.precipitation[index]} mm,{" "}
                </span>
                <span>Rain: {weather.hourly.rain[index]} mm</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Home;
