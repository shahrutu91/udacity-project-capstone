// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const path = require('path');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server

const port = 8000;

const server = app.listen(port, () => {
    console.log('server running'); 
    console.log(`running on localhost: ${port}`);
})

// GET Function

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile('src/client/view/index.html');
})

// POST Function


app.post('/postData',function (req,res){
    projectData['to'] = req.body.to;
    projectData['from'] = req.body.from;
    projectData['temperature'] = req.body.temperature;
    projectData['weather_condition'] = req.body.weather_condition;
    projectData['daystogo'] = req.body.daystogo;
    projectData['cityImage']  = req.body.cityImage;
    projectData['date'] = req.body.date;

    res.send(projectData);
});
