const http = require('http');

const app = require('./app');
// const connect = require('./db');
const env = require('./helpers/environments');

const PORT = env.getEnvironment('PORT') || 3000;
const NODE_ENV = env.getEnvironment('NODE_ENV');
// const MONGO_URL = env.getEnvironment('MONGO_URL');

const server = http.createServer(app);

server.listen(PORT, async (err) => {
	if (err) console.error(err);

	console.log('\n//...');

	// await connect.mongo(MONGO_URL);

	console.log(`Server is running on port: ${PORT}`);
	console.log(`\x1b[33m${NODE_ENV.toUpperCase()} MODE ON\x1b[0m`);
});
