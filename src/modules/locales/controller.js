// const mongoose = require('mongoose');
const Locale = require('../../models/locale');

class LocalesController {
	constructor() {
		this.localSchema = Object.keys(Locale.schema.obj);
	}

	async getLocales(req, res) {
		try {
			// const locales = await Locale.find();
			res.json({ locales: [] });
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
