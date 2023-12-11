const { Schema, model } = require('mongoose');

const LocaleSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	value: {
		type: String,
	},
	locale: {
		type: String,
		required: true,
	},
});

module.exports = model('Locale', LocaleSchema);
