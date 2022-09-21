import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props.country)
    const {area, name, population, languages, flags} = props.country
    return (
      <div className="country">
        <h3>{name.common}</h3>
        <img src={flags.png} alt="" />
        <p>Area: {area}</p>
        <p>Population: {population}</p>
        <p>Language: {languages?.bul}</p>
      </div>
    );
};

export default Country;