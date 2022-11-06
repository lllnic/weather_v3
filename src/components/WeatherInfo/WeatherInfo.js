import React from "react";
import IconWeather from "../IconWeather/IconsWeather";

const WeatherInfo = (props) => {
    return (
        <div className="component">
            <div className="component_info">
                <p>Местоположение: {props.weather.name} </p>
                <p>Температура: {props.weather.main.temp}</p>
            </div>
            <div className="component_img">
                <IconWeather weatherImg={props.weather.weather[0].icon} />
            </div>
        </div>
    );
};

export default WeatherInfo;
