import React from "react";
import sad from "../../static/icons/sad.png";

const WeatherError = (props) => {
    return (
        <div className="component">
            <div className="component_info">
                <p>{props.error}</p>
            </div>
            <div className="component_img">
                <img src={sad} alt="" />
            </div>
        </div>
    );
};

export default WeatherError;

