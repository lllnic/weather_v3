import React from "react";
import load from "../../static/icons/load.gif";

const LoadingWeather = (props) => {
    return (
        <div>
            <div className="component">
                <div className="component_info">
                    <p>Подождите, идёт загрузка</p>
                </div>

                <div className="component_img">
                    <img src={load} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoadingWeather;
