import React from 'react';

const CountryTitle = ({ country }) => {
    return (
        <div>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <img alt="Bootstrap Image Preview" src={country.flags.png} class="img-thumbnail" />
                </div>
            </div>
            <h3 class="text-center">
                {country.name.common}
            </h3>
            <p class="text-center">
                {country.name.official}
            </p>
        </div>
    );
}

export default CountryTitle;