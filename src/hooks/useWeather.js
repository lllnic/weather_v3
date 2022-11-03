import  { useState } from "react";
import { API_KEY } from "../utils/consts";

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchWeather(city) {
        try {
            setError(null);
            setLoading(true);
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
       
            if (response.status >= 300) {
                const error = new Error(data.message);
                throw error
            }
            setWeather(data);
        } catch (error) {
            setError(error.message);
            setWeather(null)
        } finally {
           setLoading(false);
        }
    }

    return {
        fetchWeather,
        weather,
        error,
        loading,
    };
};

export default useWeather;
