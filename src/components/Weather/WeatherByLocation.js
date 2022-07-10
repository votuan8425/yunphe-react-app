import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";

const WeatherByLocation = () => {
    const { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState("");
    useEffect(()=>{
        getWeatherByLocation();
    },[]);
    const getWeatherByLocation = async() =>{
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://wwww.metaweather.com/api/location/${woeid}/`},
        });
        console.log(response);
        if (response &&response.data){
            setLocationWeather(response.data); 
        }
    }
    return(
        <div>
            {/* {JSON.stringify(locationWeather)} */}
            <WeatherState 
            weatherState={"eric"}
            />
        </div>
    )
}
export default WeatherByLocation;