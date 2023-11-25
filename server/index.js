const express = require('express');
const app = express();
const cors = require('cors');
// Import axios to handle the HTTP requests to the API
const axios = require('axios'); 

//middlewares
app.use(express.json());
app.use(cors());

//import routes
const countryRoutes = require('./routes/countryRoutes');
app.use('/country', countryRoutes);



app.listen(8080, () => 
    {console.log('Server running on port 8080')});

module.exports = app;