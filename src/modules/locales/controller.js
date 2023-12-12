const { Client } = require('pg');

const env = require('../../helpers/environments');

const LocalesController = () => {
	const getClient = () => {
		const POSTGRES_URL = env.getEnvironment('POSTGRES_URL');
		const client = new Client({
			connectionString: `${POSTGRES_URL}?sslmode=require`,
		});

		return client;
	};

	const getLocales = async (req, res) => {
		const client = getClient();

		try {
			await client.connect();
			const result = await client.query('SELECT * FROM locales');

			res.json({ locales: result.rows });
		} catch (error) {
			res.status(500).json({ error });
		} finally {
			await client.end();
		}
	};

	const createNewLocale = async (req, res) => {
		try {
			// const { key, value, locale } = req.body;
			// const newLocale = await Locale.create({ key, value, locale });

			// res.json({ newLocale });
		} catch (error) {
			res.status(500).json({ error });
		}
	};

	return ({
		getLocales,
		createNewLocale,
	});
};

module.exports = LocalesController();
