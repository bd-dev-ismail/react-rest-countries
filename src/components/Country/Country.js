import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props)
    const {area, name, population, languages} = props.country
    return (
      <div className="country">
        <h3>{name.common}</h3>
        <p>Area: {area}</p>
        <p>Population: {population}</p>
        <p>Language: {languages?.bul}</p>
      </div>
    );
};

export default Country;