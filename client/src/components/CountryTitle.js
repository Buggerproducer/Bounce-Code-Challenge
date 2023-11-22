import React from 'react';

const CountryTitle = ({ country }) => {
    return (
        <div>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <img alt="Bootstrap Image Preview" src={country.flags.png} class="img-thumbnail large-image" />
                </div>
            </div>
            <h2 class="text-center mt-3">
                {country.name.common}
            </h2>
            <p class="text-center">
                {country.name.official}
            </p>
        </div>
    );
}

export default CountryTitle;