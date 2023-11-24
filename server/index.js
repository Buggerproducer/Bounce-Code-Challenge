const express = require('express');
const app = express();
const cors = require('cors');
// Import axios to handle the HTTP requests to the API
const axios = require('axios'); 

//middlewares
app.use(express.json());
app.use(cors());

//Routes

//Get country information
// Route to get country list based on user input
app.get('/country/:name', async (req, res) => {
    const { name } = req.params; // Get the country name from the URL parameter

    try {
        // Use axios to make a GET request to the REST Countries API
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

        // Send the response back to the client
        const countryInfo = response.data; // Extracting the 'name' from each country
        //only get the url of flag, common name, population, region, capital
        const countryList = countryInfo.map(country => {
            return {
                flagUrl: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital
            }
        });
        res.json(countryList); // Sending the list of names back to the client
        } catch (error) {
        // If there's an error, send back a status code and message
        console.log(error);
    }
});

// Route to get exact country information
app.get('/exact_country/:name', async (req, res) => {
    const { name } = req.params; // Get the country name from the URL parameter

    try {
        // Use axios to make a GET request to the REST Countries API
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        // Send the response back to the client
        const countryInfo = response.data; // Extracting the 'name' from each country

        console.log(countryInfo[0]); 

        res.json(countryInfo[0]); // Sending the list of names back to the client
    }catch (error) {
        // If there's an error, send back a status code and message
        console.log(error);
    }
});

// Route to get all countries
app.get('/all_countries', async (req, res) => {
    try {
        // Use axios to make a GET request to the REST Countries API
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        // Send the response back to the client
        const countryInfo = response.data; // Extracting the 'name' from each country
        //only get the url of flag, common name, population, region, capital
        const countryList = countryInfo.map(country => {
            return {
                flagUrl: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital
            }
        });
        res.json(countryList); // Sending the list of names back to the client
    }catch (error) {
        // If there's an error, send back a status code and message
        console.log(error);
    }
});

app.listen(8080, () => 
    {console.log('Server running on port 8080')});
