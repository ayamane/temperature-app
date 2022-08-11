'use strict';

const express = require('express')
const path = require('path');
const temperature = require('../src/temperature.js')

const app = express()
const port = process.env.PORT || 3000	// get environ variable or default

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.get('/:temperature', (req, res) => {
	var temperatureParam = req.params.temperature
	var degrees = temperature.getTemperatureDimension(temperatureParam)
	var degreesLabel = 'Fahrenheit:'

	if (degrees == 'F') { degreesLabel = 'Celcius:' }

	const convertedTemperature = temperature.convertTemperature(temperatureParam)

	res.json({
		temperature: convertedTemperature,
		degrees: degreesLabel
	});
});

// start the server
app.listen(port, () => {
	console.log('server is up on port ' + port)
})