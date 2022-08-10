'use strict';

const express = require('express')
const path = require('path');
const temp = require('../src/temperature.js')

const app = express()
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.get('/:temperature', (req, res) => {
	var centigrade = req.params.temperature
	console.log('Centigrade: ' + centigrade)

	const fahrenheit = temp(centigrade)

	console.log('Fahrenheit: ' + fahrenheit)

	res.send({
		temperature: fahrenheit,
		degrees: 'Fahrenheit'
	});
});

app.get('/help', (req, res) => {
	res.send({
		name: 'Andrew',
		email: 'andrew.yamane@gmail.com'
	})
})

// start the server
app.listen(3000, () => {
	console.log('server is up on port 3000')
})