import './App.css';
import React, {Fragment} from 'react';

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
  <div className="container">
    <Input setCountryList={setCountryList}/>
    {countryList && <CountryList data={countryList} 
    setCountry = {setCountry}
    setCountryList = {setCountryList}  />} 
    {country && !countryList && <CountryTitle country={country}/> }
  </div>
</Fragment>;
}

export default App;
