import './App.css';
import React, { Fragment } from 'react';

//component
import Input from './components/Input';
import CountryList from './components/CountryList';
import CountryTitle from './components/CountryTitle';

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
            {countryList && <CountryList data={countryList}
              setCountry={setCountry}
              setCountryList={setCountryList} />}
            </div>
     </div>
      
      <div class="row mt-3">
        <div class="col-md-3">
          <h2>
            Heading
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
        <div class="col-md-6">
          {!countryList && country && <CountryTitle country={country} />}
        </div>
        <div class="col-md-3">
          <h2>
            Heading
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
        </div>
        <div class="col-md-6">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        </div>
      </div>
      {/* {country && !countryList && <CountryTitle country={country}/> } */}
    </div>
  </Fragment>;
}

export default App;
