import axios from 'axios';
const WeatherState = (props) =>{
    const weatherState = props.weatherState;

    const getWeatherIcon = (weatherState) =>{
        return "https://wwww.metaweather.com/static/img/weather/sn.svg";
    }

    return(
        <div className='weather-state-container'>
            <div className='icon-state'>
                <img src={getWeatherIcon()} />
            </div>
            <div className='name-state'>
                {weatherState}
            </div>
        </div>
    )
}
export default WeatherState;