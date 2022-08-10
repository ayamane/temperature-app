/**
 * convertToFahrenheit
 * @param {any} a - the temperature to convert
 * @param {any} b - the temperature indicator (F/C)
 *
 * Converts the temperature from Celcius to Fahrenheit (default behavior)
 * or Fahrenheit to Celcius.  If the temperature indicator is not passed
 * converts with the default behavior
 */
const convertToFahrenheit = function (a, b) {
	var temperature = 0

	// check if the temperature has the dimension attached (F/C)
	if (b == 'C' || b == 'c') {
		temperature = a.slice(0, -1)
		return (temperature * 9 / 5) + 32
	}
	else if (b == 'F' || b == 'f') {
		temperature = a.slice(0, -1)
		return (temperature - 32) * 5 / 9
	}

	return a * (9 / 5) + 32
}

module.exports = convertToFahrenheit