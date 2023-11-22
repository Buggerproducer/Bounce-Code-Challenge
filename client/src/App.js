import './App.css';
import React, { Fragment } from 'react';

//component
import Input from './components/Input';
import CountryList from './components/CountryList';
import CountryTitle from './components/CountryTitle';
import Time from './components/Time';

function App() {
  // Initialize the state of the country List
  const [countryList, setCountryList] = React.useState(null); // Initialize the state with null
  // Initialize the state of the country
  const [country, setCountry] = React.useState(null); // Initialize the state with null

  return <Fragment>

    <div className="container-fluid">

    <div class="row">
		        <div class="col-md-12">
            <Input setCountryList={setCountryList} />
            {<CountryList data={countryList}
              setCountry={setCountry}
              setCountryList={setCountryList} />}
            </div>
     </div>
      </div>
  </Fragment>;
}

export default App;
