import React,{useState,useEffect} from 'react'
import '../css/Temp.css'
import { Input } from 'reactstrap';

export default function Temp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Indore');
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={3bc3a695-28cb-47e7-94eb-6bbec9d4a6c9}
  useEffect(() => {
    const fetchApi=async()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3bc3a695-28cb-47e7-94eb-6bbec9d4a6c9`
      const response=await fetch(url);
      const resJson=await response.JSON();
      console.log("Weather data :",resJson);
    }
    fetchApi();
    
    
  })
    
   
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
