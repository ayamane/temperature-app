'use strict';

const express = require('express')
const path = require('path');
const convertTemperature = require('../src/temperature.js')

const app = express()
const port = process.env.PORT || 3000	// get environ variable or default

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.get('/:temperature', (req, res) => {
	var temperature = req.params.temperature
	var degrees = temperature.slice(-1)	// check if F or C passed
	var degreesLabel = 'Fahrenheit:'
	if (degrees.toUpperCase() == 'F') { degreesLabel = 'Celcius:' }

	const convertedTemperature = convertTemperature(temperature, degrees)

	console.log(degreesLabel + ' ' + temperature)
	console.log(degreesLabel + ' ' + convertedTemperature)

	res.send({
		temperature: convertedTemperature,
		degrees: degreesLabel
	});
});

// start the server
app.listen(port, () => {
	console.log('server is up on port ' + port)
})