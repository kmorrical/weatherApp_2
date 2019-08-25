import React, { Component, useState } from 'react';
import './App.css';


function SearchBar(props) {
    const { defaultCity, fetchCityData } = props;
    const [newCity, setCity] = useState(props.defaultCity);
        
    return (
        <div>
            <input type="text" placeholder={defaultCity} onChange={(e) => setCity(e.target.value)}/>
            <br/>
            <button onClick={()=>fetchCityData(newCity)}>Enter</button>
        </div>
        );
}
export default SearchBar;