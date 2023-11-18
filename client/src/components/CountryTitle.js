import React from 'react';

const CountryTitle = ({country}) => {
    return (
        <div>
            <h1>{country.name.official}</h1>
            <h2>{country.name.common}</h2>
        </div>
    );
}

export default CountryTitle;