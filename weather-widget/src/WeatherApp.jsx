import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:null,
        temp:null,
        humidity:null,
        tempMin:null,
        tempMax:null,
        feelsLike:null,
        weather:null,
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
        <h1 style={{textAlign:"center"}}>Search Weather</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>);
}
   
