const { Client } = require('pg');

const postgresConnector = (POSTGRES_URL) => {
	const client = new Client({
		connectionString: `${POSTGRES_URL}?sslmode=require`,
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
