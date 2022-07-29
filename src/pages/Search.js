import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Search = () => {

    const [userCity, setUserCity] = useState("");

    const FetchWeather = async () => {
    
        // const key = "88f56688097f82e5c0a415624cb95159";  // key for open weathermap
        // const units = "imperial";
        // const requestUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&appid=${key}&units=imperial`;

        const key = "822f6c8973fc4be08806effe500f4962";
        const requestUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${userCity}&key=${key}&units=I&days=6`

        try {
            const response = await fetch(requestUrl);
            const result = await response.json();
            if (response.ok) console.log("result", result);
        } catch (err) {
            if (err) throw err;
            console.log(err);
        }
    
    };
    
    const handleChange = (e) => {
        setUserCity(e.target.value);
    };

    console.log("userCity", userCity);

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
                    <Button variant="contained" id="searchBtn" onClick={FetchWeather}>Search</Button>
                </div>
            </form>

        </div>

    )
};

export default Search;