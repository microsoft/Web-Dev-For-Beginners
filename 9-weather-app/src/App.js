import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d1e2d9489637d327044848f185c55b91`;


  const searchLocation=(event)=>{
    if (event.key === "Enter") {
    axios.get(url).then((res)=>{
      setData(res.data);
      console.log(res.data);
    })
    setLocation('');
  }
}


  return (
    <div className="App">
      <div className="search">
        <input type="text" 
        value={location}
        placeholder="Enter location..."
        onChange={event=>setLocation(event.target.value)} 
        onKeyPress={searchLocation}/>
      </div>

      <div className = "container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ?<p className="bold">{data.main.feels_like}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed}mph</p> : null}
          <p>Wind Speed</p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
