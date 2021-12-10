import React,{useState,useEffect} from 'react'
import '../css/Temp.css'
import { Input } from 'reactstrap';
export default function Temp() {
    const [city, setCity] = useState('Indore');
    const [search, setSearch] = useState('');
    //api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

    const data=[
        {
            "coord": {
              "lon": 145.77,
              "lat": -16.92
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
              }
            ],
            "base": "stations",
            "main": {
              "temp": 300.15,
              "pressure": 1007,
              "humidity": 74,
              "temp_min": 300.15,
              "temp_max": 300.15
            },
            "visibility": 10000,
            "wind": {
              "speed": 3.6,
              "deg": 160
            },
            "clouds": {
              "all": 40
            },
            "dt": 1485790200,
            "sys": {
              "type": 1,
              "id": 8166,
              "message": 0.2064,
              "country": "AU",
              "sunrise": 1485720272,
              "sunset": 1485766550
            },
            "id": 2172797,
            "name": "Cairns",
            "cod": 200
            }
    ];
    console.log("Weather data :",data);
    return (
        <div style={{backgroundColor: '#7D7C7A'}}>
            <div className="main_box">
                <Input placeholder="Search City"  className="search" style={{backgroundColor: 'whitesmoke',borderRadius: '20px',marginTop: '0px'}}/>
                <br />
                <div className="info">  
                    <i className="fas fa-street-view" style={{color: 'white',fontSize: '50px'}}></i>
                    <h2 className='location'>{city}</h2>
                    <h3 className='temp'>8.25' Cel</h3>
                    <h4 className='temp_min_max'>Min: 8.25°C | Max: 10.35°C</h4>
                   
                </div>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>

            
        </div>
    )
}
