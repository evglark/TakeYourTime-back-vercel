const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	figmaUri: {
		type: String,
	},
	jsonProps: {
		type: String,
	},
});

module.exports = model('Task', TaskSchema);
