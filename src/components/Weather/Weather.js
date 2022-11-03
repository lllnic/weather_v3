import React from "react";
import { useState } from "react";
import useWeather from "../../hooks/useWeather";
import LoadingWeather from "../LoadingWeather/LoadingWeather";
import WeatherError from "../WeatherError/WeatherError";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./weather.scss";

const Weather = () => {
    const [city, setCity] = useState(undefined);

    const { weather, error, fetchWeather, loading } = useWeather();

    async function onSubmitHandler(e) {
        e.preventDefault();
        fetchWeather(city);
    }

    return (
        <div className="bg">
            <div className="container">
                <div className="main">
                    <form onSubmit={onSubmitHandler} className="form">
                        <input
                            type="text"
                            placeholder="Введите название города"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                        />
                        <button type="submit">Узнать погоду</button>
                    </form>
                    {loading ? (<LoadingWeather />) : ( weather && <WeatherInfo weather={weather} />)}
                    {/* {weather && <WeatherInfo weather={weather} />} */}
                    {error && <WeatherError error={error} />}
                </div>
            </div>
        </div>
    );
};

export default Weather;
