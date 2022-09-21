import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    //usestate
    const [countries, setCoutries] = useState([]);
    //useEffect for fetch
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCoutries(data))
    },[]);
    //return & looping data
    return (
      <div>
        <h1>Welcome our Countries.. {countries.length}</h1>
        <div className="countries-container">
          {countries.map((country) => (
            <Country country={country}></Country>
          ))}
        </div>
      </div>
    );
};

export default Countries;