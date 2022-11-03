import React from 'react';
import d01 from "../../static/icons/d01.png";
import n01 from "../../static/icons/n01.png";
import d02 from "../../static/icons/d02.png";
import n02 from "../../static/icons/n02.png";
import d03 from "../../static/icons/d03.png";
import n03 from "../../static/icons/n03.png";
import d04 from "../../static/icons/d04.png";
import n04 from "../../static/icons/n04.png";
import d09 from "../../static/icons/d09.png";
import n09 from "../../static/icons/n09.png";
import d10 from "../../static/icons/d10.png";
import n10 from "../../static/icons/n10.png";
import d11 from "../../static/icons/d11.png";
import n11 from "../../static/icons/n11.png";
import d13 from "../../static/icons/d13.png";
import n13 from "../../static/icons/n13.png";
import d50 from "../../static/icons/d10.png";
import n50 from "../../static/icons/n50.png";
import temp from "../../static/icons/temp.png";


const IconWeather = (props) => {
    
    let weatherImgMain;
    switch (props.weatherImg) {
        case "01d":
            weatherImgMain = d01;
            break;
        case "01n":
            weatherImgMain = n01;
            break;
        case "02d":
            weatherImgMain = d02;
            break;
        case "02n":
            weatherImgMain = n02;
            break;
        case "03d":
            weatherImgMain = d03;
            break;
        case "03n":
            weatherImgMain = n03;
            break;
        case "04d":
            weatherImgMain = d04;
            break;
        case "04n":
            weatherImgMain = n04;
            break;
        case "09d":
            weatherImgMain = d09;
            break;
        case "09n":
            weatherImgMain = n09;
            break;
        case "10d":
            weatherImgMain = d10;
            break;
        case "10n":
            weatherImgMain = n10;
            break;
        case "11d":
            weatherImgMain = d11;
            break;
        case "11n":
            weatherImgMain = n11;
            break;
        case "13d":
            weatherImgMain = d13;
            break;
        case "13n":
            weatherImgMain = n13;
            break;
        case "50d":
            weatherImgMain = d50;
            break;
        case "50n":
            weatherImgMain = n50;
            break;
        default: weatherImgMain = temp
    }
    return (
        <div>
            <img src={weatherImgMain} alt="weather icons" />
        </div>
    );
};

export default IconWeather;