const merge = require('lodash/merge')

const defaultConfiguration = require('./configuration.default')

const configuration = merge({}, defaultConfiguration)

module.exports = configuration

merge(configuration, getConfiguration(process.env.NODE_ENV))

// For services like Amazon Elastic Compute Cloud and Heroku
if (process.env.PORT) {
	configuration.webserver.port = process.env.PORT
}

// For passing custom configuration via an environment variable.
// For frameworks like Docker.
// E.g. `CONFIGURATION="{ \"key\": \"value\" }" npm start`.
if (process.env.CONFIGURATION) {
	try {
		merge(configuration, JSON.parse(process.env.CONFIGURATION))
	} catch (error) {
		console.error(error)
	}
}

function getConfiguration(env) {
	switch (env) {
		case 'production':
			return require('./configuration.production')
		default:
			return require('./configuration.development')
	}
}