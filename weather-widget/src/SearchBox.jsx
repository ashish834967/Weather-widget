import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d09af7cedd60a365ec3ea825ae30f227";

    let getWeatherInfo = async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    //console.log(jsonResponse);   
    let result={
        
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    //console.log(result);
    return result;
        }catch(err){
            throw err;
        }
    
}
    let handChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async (event)=>{
        try{event.preventDefault();
            //console.log(city);
            setCity("");
            setError("");
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError("No such place exits!");
            
        }      
    }
    return(
        <div className="searchbox">
           
            <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handChange}/>
            <br/><br/>
            <Button variant="contained" type="submit">Search</Button>
            <p style={{color:"red"}}>{error}</p>
            </form>

        </div>
    );
}