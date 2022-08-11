const temperature = require('../src/temperature.js')

test('Should return a number from a string with a letter', () => {
	const number = temperature.getTemperatureNumber('34F')
	expect(number).toBe(34);
})

test('Should return a number from a string with a decimal', () => {
	const number = temperature.getTemperatureNumber('12.2C')
	expect(number).toBe(12.2);
})

test('Should convert Celcius temperature to Fahrenheit', () => {
	const fahrenheit = temperature.convertTemperature('22C')
	expect(fahrenheit).toBeCloseTo(71.6);
})

test('Should convert temperature (without degree dimension) to Fahrenheit', () => {
	const fahrenheit = temperature.convertTemperature('2')
	expect(fahrenheit).toBeCloseTo(35.6);
})

test('Should convert Fahrenheit temperature to Celcius', () => {
	const celcius = temperature.convertTemperature('78F')
	expect(celcius).toBeCloseTo(25.55, 1);
})

test('Should return a F from a number ending with a F', () => {
	const dim = temperature.getTemperatureDimension('12.2F')
	expect(dim).toBe('F')

})

test('Should return a C from a number ending with a C', () => {
	const dim = temperature.getTemperatureDimension('32C')
	expect(dim).toBe('C')

})

test('Should return a C from a number without a letter', () => {
	const dim = temperature.getTemperatureDimension('33')
	expect(dim).toBe('C')
})

test('Should return a C from a number without a letter that is not C or F', () => {
	const dim = temperature.getTemperatureDimension('34X')
	expect(dim).toBe('C')
})

test('Should return NaN when no number is passed', () => {
	const temp = temperature.convertTemperature('Number')
	expect(temp).toBeNaN();
})