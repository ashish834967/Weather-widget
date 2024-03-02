import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
import { Info, SpatialTrackingRounded } from '@mui/icons-material';
export default function InfoBox({info}){

    const coldUrl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hotUrl="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    const rainUrl="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
        <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity >80 ? rainUrl: info.temp > 15 ? hotUrl: coldUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity >80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p className='para'>Temperature = {info.temp}&deg;C</p>
          <p className='para'>Humidity = {info.humidity}</p>
          <p className='para'>Min Temp = {info.tempMin}&deg;C</p>
          <p className='para'>Max Temp = {info.tempMax}&deg;C</p>
          <p className='para'>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );

}