const { Router } = require('express');

const LocalesController = require('./controller');

const localesRouter = new Router();
const localesController = new LocalesController();

localesRouter
	.get('/locals', localesController.getLocales)
	.post('/locals', localesController.createNewLocale);

module.exports = localesRouter;
