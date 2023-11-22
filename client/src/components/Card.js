import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const CountryCard = ({ country }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/country/${country.name}`); // Use a unique identifier for the country
    };

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleCardClick}>
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