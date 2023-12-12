const { Client } = require('pg');

const postgresConnector = (connectionString) => {
	const client = new Client({
		connectionString,
	});

	client.connect()
		.then(() => {
			console.log('Connected to PostgreSQL database');
			client.end();
		})
		.catch((err) => {
			console.error('Error connecting to PostgreSQL database', err);
		});
};

module.exports = postgresConnector;
