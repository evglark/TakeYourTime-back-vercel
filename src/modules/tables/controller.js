const mongoose = require('mongoose');

const Controller = require('../../helpers/controller');

class TablesController extends Controller {
	async getTables(req, res) {
		try {
			const { collections } = mongoose.connection;
			const names = Object.keys(collections).map((k) => k);

			res.json({ names });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}
}

module.exports = TablesController;
