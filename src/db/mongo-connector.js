const mongoose = require('mongoose');

const mongoConnector = async (MONGO_URL) => {
	if (!MONGO_URL) throw Error('Mongo url is undefined');

	try {
		await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log('connected to MONGODB');
	} catch (error) {
		console.log('MONGO ERR:', error);
	}
};

module.exports = mongoConnector;
