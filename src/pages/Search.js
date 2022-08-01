import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// could make a conditional statement that if Data exists return different return...being the "forcast" return...

const Search = () => {


    const [userCity, setUserCity] = useState("");
    const [data, setData] = useState();

    const FetchWeather = async () => {

        if (!userCity) {
            alert("Please enter a City, State"); // make this a better function later
        } 
    
        // const key = "88f56688097f82e5c0a415624cb95159";  // key for open weathermap
        // const units = "imperial";
        // const requestUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&appid=${key}&units=imperial`;

        const key = "822f6c8973fc4be08806effe500f4962";
        const requestUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${userCity}&key=${key}&units=I&days=6`

        try {
            const response = await fetch(requestUrl);
            const result = await response.json();
            if (response.ok) {
                // console.log("result", result);
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

    const timeFormat = (value) => {

        const format = (num) => {
            return num.toString().padStart(2, "0");
        }

        let unix = new Date(value * 1000)        
        let hours = unix.getHours();
        // conditional to change it from 24 hr clock to 12 hours
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
        let minutes = unix.getMinutes();
        let time = `${format(hours)}:${format(minutes)}`;

        return time;
    };

    const newSearch = () => {
        setData();
    }


    console.log("userCity", userCity);
    console.log("data", data)

    if (!data) {
    return (

        <div className="searchContainer rounded-4" >

            <form className="searchForm" id="">
                <p className="searchText">Search for a city</p>
                <div className="searchField d-flex justify-content-center">
                    <TextField className="cityTextField" id="cityName" type="text" label="City Name, State" variant="outlined" value={userCity} onChange={handleChange} />
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
        
        let date = data.data[0].datetime.split("-");
        let date1 = data.data[1].datetime.split("-");
        let date2 = data.data[2].datetime.split("-");
        let date3 = data.data[3].datetime.split("-");
        let date4 = data.data[4].datetime.split("-");
        let date5 = data.data[5].datetime.split("-");

        return (

            <div className="forcastContainer rounded-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <p className="cityName">{data.city_name}, {data.state_code}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <Button variant="contained" className="rounded-2 mt-1 mb-4" id="newSearchBtn" onClick={newSearch}>New Search</Button>
                    </div>
                </div>
    
                <div className="row">
    
                    {/* side panel to display todays forcast */}
                    <div className="col-4 todayForcastContainer">
    
                        <div className="todayForcast d-flex flex-column align-items-stretch rounded-4">
                            <p className="todayTitle ms-2">Today's Forcast</p>
                            <p className="today ms-2">Temp: {data.data[0].temp}&#8457;</p>
                            <p className="today ms-2">Wind: {data.data[0].wind_spd} MPH {data.data[0].wind_cdir}</p>
                            <p className="today ms-2">Humidity: {data.data[0].rh}%</p>
                            <p className="today ms-2">Precipitation: {data.data[0].pop}%</p>
                            <p className="today ms-2">Sunrise: {timeFormat(data.data[0].sunrise_ts)} AM</p>
                            <p className="today ms-2">Sunset: {timeFormat(data.data[0].sunset_ts)} PM</p>
                        </div>
    
                    </div>
    
                    {/* Main content displaying future forcasts */}
                    <div className="col-8 mobileWide">
    
                        <div className="d-flex forcastCardsContainer flex-wrap gap-3">
    
                            <div className="forcastCards d-flex flex-column align-items-stretch rounded-4">
                                <p></p>
                                <p className="future ms-2">{date1[1]}-{date1[2]}-{date1[0]}</p>
                                <p className="future ms-2">Temp: {data.data[1].temp}&#8457;</p>
                                <p className="future ms-2">Wind: {data.data[1].wind_spd} MPH {data.data[1].wind_cdir}</p>
                                <p className="future ms-2">Humidity: {data.data[1].rh}%</p>
                                <p className="future ms-2">Precipitation: {data.data[1].pop}%</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[1].sunrise_ts)} AM</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[1].sunset_ts)} PM</p>
                            </div>
    
                            <div className="forcastCards d-flex flex-column align-items-stretch rounded-4">
                                <p></p>
                                <p className="future ms-2">{date2[1]}-{date2[2]}-{date2[0]}</p>
                                <p className="future ms-2">Temp: {data.data[2].temp}&#8457;</p>
                                <p className="future ms-2">Wind: {data.data[2].wind_spd} MPH {data.data[2].wind_cdir}</p>
                                <p className="future ms-2">Humidity: {data.data[2].rh}%</p>
                                <p className="future ms-2">Precipitation: {data.data[2].pop}%</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[2].sunrise_ts)} AM</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[2].sunset_ts)} PM</p>
                            </div>
    
                            <div className="forcastCards d-flex flex-column align-items-stretch rounded-4">
                                <p></p>
                                <p className="future ms-2">{date3[1]}-{date3[2]}-{date3[0]}</p>
                                <p className="future ms-2">Temp: {data.data[3].temp}&#8457;</p>
                                <p className="future ms-2">Wind: {data.data[3].wind_spd} MPH {data.data[3].wind_cdir}</p>
                                <p className="future ms-2">Humidity: {data.data[3].rh}%</p>
                                <p className="future ms-2">Precipitation: {data.data[3].pop}%</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[3].sunrise_ts)} AM</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[3].sunset_ts)} PM</p>
                            </div>
    
                            <div className="forcastCards d-flex flex-column align-items-stretch rounded-4">
                                <p></p>
                                <p className="future ms-2">{date4[1]}-{date4[2]}-{date4[0]}</p>
                                <p className="future ms-2">Temp: {data.data[4].temp}&#8457;</p>
                                <p className="future ms-2">Wind: {data.data[4].wind_spd} MPH {data.data[4].wind_cdir}</p>
                                <p className="future ms-2">Humidity: {data.data[4].rh}%</p>
                                <p className="future ms-2">Precipitation: {data.data[4].pop}%</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[4].sunrise_ts)} AM</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[4].sunset_ts)} PM</p>
                            </div>
    
                            <div className="forcastCards d-flex flex-column align-items-stretch rounded-4">
                                <p></p>
                                <p className="future ms-2">{date5[1]}-{date5[2]}-{date5[0]}</p>
                                <p className="future ms-2">Temp: {data.data[5].temp}&#8457;</p>
                                <p className="future ms-2">Wind: {data.data[5].wind_spd} MPH {data.data[5].wind_cdir}</p>
                                <p className="future ms-2">Humidity: {data.data[5].rh}%</p>
                                <p className="future ms-2">Precipitation: {data.data[5].pop}%</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[5].sunrise_ts)} AM</p>
                                <p className="future ms-2">Sunrise: {timeFormat(data.data[5].sunset_ts)} PM</p>
                            </div>
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        )
    }
};

export default Search;