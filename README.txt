temperature-app

HTTP API that takes a number representing a temperature with or without the degree indicator (F/C)
and converts the temperature from Centigrade to Fahrenheit or Fahrenheit to Centigrade.  If no
indicator is included, the default behavior is to convert to Fahrenheit.

The service was designed to be lightweight and fairly minimal, so is written in JavaScript and
implemented with NodeJs using the express (https://www.npmjs.com/package/express) and
path (https://www.npmjs.com/package/path) npm modules.  The server.js starts and listens for
requests on the port assigned to the environment variable or 3000 (common dev/test port).

Heroku was selected for hosting as it easily integrates with Git/GitHub and has an available free
tier for developement and testing.

Instructions to build and deploy:
	npm init
	npm i express
	npm i path
	npm i jest --save-dev

	to run from main project folder
	node server/server.js
	navigate to localhost:3000

	to run tests from main project folder
	npm test

A working example can be found at:  https://mighty-badlands-45305.herokuapp.com/