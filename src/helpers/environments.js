const dotenv = require('dotenv');

dotenv.config();

const getEnvironment = (environment) => process.env[environment];

module.exports = {
	getEnvironment,
};
