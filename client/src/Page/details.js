import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CountryDetail = () => {
    const navigate = useNavigate(); // Hook for navigating
    const { countryName } = useParams();
    // Fetch the detailed information of the country using the countryName
    const [country, setCountry] = useState(null); // Initialize the state with null

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(`http://localhost:8080/exact_country/${countryName}`);
                const data = await response.json();
                setCountry(data); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching country:', error);
            }
        };

        fetchCountry();
    }, [countryName]); // The effect depends on countryName

    // Function to handle back navigation
    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (

        <div id="main-container" class="container-fluid">
        <div className="row">
                {/* Back Button */}
                <div className="col-12">
                    <button onClick={handleBack} className="btn btn-secondary mt-3 ms-3">
                        Back
                    </button>
                </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center mt-5">Country Detail</h1>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6 text-center">
            {country && ( // Check that country is not null before trying to access its properties
                        <>
                            <h3>{country.name.common}</h3>
                            <img
                                alt={`${country.name.common} flag`}
                                src={country.flags.png} // Assuming the API returns a property named 'flags' with the image URL
                                className="large-image"

                            />
                            <p>
                                <strong>Capital:</strong> {country.capital}
                            </p>
                        </>
                    )}

            </div>
            <div class="col-md-6 mt-5">
                {/* List some basic information */}
                {country && ( <ul className="list-group">
                <li className="list-group-item no-border">
                    <strong>Region: </strong> {country.region}
                </li>
                <li className="list-group-item no-border">
                    <strong>Population: </strong> {country.population}
                </li>
                <li className="list-group-item no-border">
                    <strong>Area: </strong> {country.area} km<sup>2</sup>
                </li>
                <li className="list-group-item no-border">
                    <strong>Language: </strong> 
                    {Object.values(country.languages).join(', ')}
                </li>
                <li className="list-group-item no-border">
                    <strong>Location: </strong>
                    <a href={`https://www.google.com/maps/place/${country.capital}`}>
                        Find on Google Map
                    </a>
                </li>
            </ul>
                )}
            </div>
        </div>
    </div>
    );
};

export default CountryDetail;
