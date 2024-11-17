import React from 'react'
import Card from '@mui/material/Card';
import './Info.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';

export const Info = ({info}) => {
    let img_url="https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let hot_img="https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=612x612&w=is&k=20&c=ZY1Q2wPQ-tBJA8Nsk6w-ceznGDW-gds6_RpqWMQVI1o="
    let rain_img="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA="
    

  return (
    <div className='cardmain'>
        <Card sx={{ maxWidth: 345 }} className='cardcontainer'>
      <CardMedia
        sx={{ height: 120 , }}
        image={info.humidity > 80 ? rain_img : info.temp > 20 ? hot_img : img_url}
        title="green iguana"

      />
      <CardContent className='cardcontent'>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}</b>{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" >
         <div className='cardtext'>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Min Temp={info.minTemp}&deg;C</div>
         <div>Max Temp={info.maxTemp}&deg;C</div>
         <div>Humidity={info.humidity}%</div>
         <div>Feels Like={info.feelslike}&deg;C</div>
         </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}
