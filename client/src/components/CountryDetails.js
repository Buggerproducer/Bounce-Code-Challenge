

function CountryDetails(country) {

    //when enter this page, show the country details on console
    console.log(country);

    return (
        <div class="row mt-5">
        <div class="col-md-6 text-center">
            {country && ( // Check that country is not null before trying to access its properties
                        <>
                            <h3>{country.name.offical}</h3>
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
            <div class="col-md-6">
            <div>
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
}

export default CountryDetails;