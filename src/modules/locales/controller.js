const Controller = require('../../helpers/controller');
const Locale = require('../../models/locale');

class LocalesController extends Controller {
	constructor() {
		super();

		this.localSchema = Object.keys(Locale.schema.obj);
	}

	async getLocales(req, res) {
		try {
			// const locales = await Locale.find();

			res.json({ mull: null });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}

	async createNewLocale(req, res) {
		try {
			const { key, value, locale } = req.body;
			const newLocale = await Locale.create({ key, value, locale });

			res.json({ newLocale });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}
}

module.exports = LocalesController;
