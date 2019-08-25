import React, { Component, useState } from 'react';
import './App.css';


function SearchBar(props) {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         changedCity: ''
    //     };
    // };
    const { defaultCity, fetchCityData } = props;
    // onInputChange = (event) => {
    //     this.setState({ changedCity: event.target.value });
    // }

    const [newCity, setCity] = useState(props.defaultCity);

    // getCity = () => {
    //     this.props.fetchCityData(this.state.changedCity);
    // }

    // render() {
        
        return (
            <div>

    <input type="text" placeholder={defaultCity} onChange={(e) => setCity(e.target.value)}/>
    <br/>
    <button onClick={()=>fetchCityData(newCity)}>Enter</button>
    </div>
        );
    //}
}
export default SearchBar;