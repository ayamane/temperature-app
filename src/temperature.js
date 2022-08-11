

/**
 * convertTemperature
 * @param {any} temperature
 *
 * Converts a temperature from Celcius to Fahrenheit or
 * from Fahrenheit to Celcius.  If the degree symbol (C or F)
 * is not included at the end of the number will convert to
 * Celcius
 */
const convertTemperature = function (temperature) {
	var convertedTemperature
	var dimension = getTemperatureDimension(temperature)
	var temperatureNbr = getTemperatureNumber(temperature)

	if (dimension == 'C') {
		convertedTemperature = convertToFahrenheit(temperatureNbr)
	}
	else if (dimension == 'F') {
		convertedTemperature = convertToCelcius(temperatureNbr)
	}

	return convertedTemperature
}

/**
 * getTemperatureDimension
 * @param {any} temperature - the temperature to get the dimension of
 *
 * Gets the dimension (F or C) if it is included at the end
 * of the temperature (e.g. 34C or 88F).  Returns C if the supplied
 * temperature doesn't have the dimension
 */
const getTemperatureDimension = function (temperature) {
	var dimension = temperature.slice(-1)

	if (dimension != 'C' && dimension != 'c'
		&& dimension != 'F' && dimension != 'f') {
		dimension = 'C'
	}

	return dimension.toUpperCase()
}

/**
 * GetTemperatureNumber
 * @param {any} temperature - the temperature to get the number of
 *
 * Gets the actual temperature number to convert
 */
const getTemperatureNumber = function (temperature) {
	let temperatureNumber = parseFloat(temperature)

	return temperatureNumber
}
/**
 * convertToFahrenheit
 * @param {any} temperature - the temperature to convert
 *
 * Converts the temperature from Celcius to Fahrenheit
 */
const convertToFahrenheit = function (temperature) {
	return (temperature * 9 / 5) + 32
}

/**
 * convertToCelcius
 * @param {any} temperature - the temperature to convert
 *
 * Converts the temperature from Fahrenheit to Celcius
 */
const convertToCelcius = function (temperature) {
	return (temperature - 32) * 5 / 9
}

module.exports = { convertTemperature, getTemperatureDimension, getTemperatureNumber }