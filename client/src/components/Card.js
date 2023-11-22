import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryCard = ({ country }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={country.flagUrl} className="card-img-top flag-image" alt={`${country.name} flag`} />
            <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">Population: {country.population}</p>
                <p className="card-text">Region: {country.region}</p>
                <p className="card-text">Capital: {country.capital}</p>
            </div>
        </div>
    );
};

export default CountryCard;