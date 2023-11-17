const express = require('express');
const app = express();
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors());

app.listen(3306, () => 
    {console.log('Server running on port 3306')});
