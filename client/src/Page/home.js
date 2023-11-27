import React, { useState, useEffect, Fragment} from 'react';

//component
import Input from '../components/Input';
import CountryList from '../components/CountryList';
import SwitchThemeButton from '../components/SwitchThemeButton';

function Home() {
  // Initialize the state of the country List
  const [countryList, setCountryList] = useState(null); // Initialize the state with null
  // Initialize the state of the country

  useEffect(() => {
    // Fetch countries on component mount
    const fetchCountries = async () => {
        try {
            const response = await fetch('http://localhost:8080/country/all_countries');
            const data = await response.json();
            setCountryList(data);
        } catch (error) {
            try {
                // If the request to the local server fails, try the remote server
                const response = await fetch('https://country-search-52pk.onrender.com/country/all_countries');
                const data = await response.json();
                setCountryList(data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    fetchCountries();
}, []);
  return <Fragment>

    <div className="container-fluid">

    <div class="row">
		    <div class="col-md-8">
                <Input setCountryList={setCountryList} />
            </div>
            <div class="col-md-3 d-flex justify-content-end">
                <SwitchThemeButton />
            </div>
        </div>
        {countryList&&<CountryList countryList={countryList} />}
      </div>
  </Fragment>;
}

export default Home;
