import React, { useState, useEffect, Fragment} from 'react';

//component
import Input from '../components/Input';
import CountryList from '../components/CountryList';


function Home() {
  // Initialize the state of the country List
  const [countryList, setCountryList] = useState(null); // Initialize the state with null
  // Initialize the state of the country

  useEffect(() => {
    // Fetch countries on component mount
    const fetchCountries = async () => {
        try {
            const response = await fetch('http://localhost:8080/all_countries');
            const data = await response.json();
            setCountryList(data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    fetchCountries();
}, []);
  return <Fragment>

    <div className="container-fluid">

    <div class="row">
		    <div class="col-md-12">
            <Input setCountryList={setCountryList} />
            {countryList&&<CountryList countryList={countryList} />}
            </div>
     </div>
      </div>
  </Fragment>;
}

export default Home;
