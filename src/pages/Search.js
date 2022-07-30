import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// could make a conditional statement that if Data exists return different return...being the "forcast" return...

const Search = () => {


    const [userCity, setUserCity] = useState("");
    const [data, setData] = useState();

    const FetchWeather = async () => {
    
        // const key = "88f56688097f82e5c0a415624cb95159";  // key for open weathermap
        // const units = "imperial";
        // const requestUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&appid=${key}&units=imperial`;

        const key = "822f6c8973fc4be08806effe500f4962";
        const requestUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${userCity}&key=${key}&units=I&days=6`

        try {
            const response = await fetch(requestUrl);
            const result = await response.json();
            if (response.ok) {
                console.log("result", result);
                setData(result);
            } 

        } catch (err) {
            if (err) throw err;
            console.log(err);
        }
    
    };
    
    const handleChange = (e) => {
        setUserCity(e.target.value);
    };

    console.log("userCity", userCity);
    console.log("data", data)

    if (!data) {
    return (

        <div className="searchContainer rounded-4" >

            <form className="searchForm" id="">
                <p className="searchText">Search for a city</p>
                <div className="searchField d-flex justify-content-center">
                    <TextField className="cityTextField" id="cityName" type="text" label="City Name" variant="outlined" value={userCity} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-center">
                    <hr className="hrLine"></hr>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="contained" className="rounded-2" id="searchBtn" onClick={FetchWeather}>Search</Button>
                </div>
            </form>

        </div>

    )
    } else {

        return (

            <div className="forcastContainer rounded-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <p className="cityName">{data.city_name}, {data.state_code}</p>
                    </div>
                </div>
    
                <div className="row">
    
                    {/* side panel to display todays forcast */}
                    <div className="col-4">
    
                        <div className="todayForcast">
                            <p className="todayTitle">Today's Forcast</p>
                            <p className="today">Temp: {data.data[0].temp}&#8457;</p>
                            <p className="today">Wind: {data.data[0].wind_spd} MPH</p>
                            <p className="today">Precipitation: {data.data[0].pop}%</p>
                        </div>
    
                    </div>
    
                    {/* Main content displaying future forcasts */}
                    <div className="col-8">
    
                        <div className="d-flex flex-wrap">
    
                            <div className="forcastCards ">
                                <p className="future">Date</p>
                                <p className="future">Temp: {data.data[1].temp}&#8457;</p>
                                <p className="future">Wind: {data.data[1].wind_spd} MPH</p>
                                <p className="future">Precipitation: {data.data[1].pop}%</p>
                            </div>
    
                            <div className="forcastCards ">
                                <p className="future">Date</p>
                                <p className="future">Temp: {data.data[2].temp}&#8457;</p>
                                <p className="future">Wind: {data.data[2].wind_spd} MPH</p>
                                <p className="future">Precipitation: {data.data[2].pop}%</p>
                            </div>
    
                            <div className="forcastCards ">
                                <p className="future">Date</p>
                                <p className="future">Temp: {data.data[3].temp}&#8457;</p>
                                <p className="future">Wind: {data.data[3].wind_spd} MPH</p>
                                <p className="future">Precipitation: {data.data[3].pop}%</p>
                            </div>
    
                            <div className="forcastCards ">
                                <p className="future">Date</p>
                                <p className="future">Temp: {data.data[4].temp}&#8457;</p>
                                <p className="future">Wind: {data.data[4].wind_spd} MPH</p>
                                <p className="future">Precipitation: {data.data[4].pop}%</p>
                            </div>
    
                            <div className="forcastCards ">
                                <p className="future">Date</p>
                                <p className="future">Temp: {data.data[5].temp}&#8457;</p>
                                <p className="future">Wind: {data.data[5].wind_spd} MPH</p>
                                <p className="future">Precipitation: {data.data[5].pop}%</p>
                            </div>
                        </div>
    
                        {/* needs a flexbox inside this box */}
    
                    </div>
    
                </div>
    
            </div>
    
        )
    }
};

export default Search;