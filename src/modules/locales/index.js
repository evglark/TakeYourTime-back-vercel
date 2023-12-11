const { Router } = require('express');

const LocalesController = require('./controller');

const localesRouter = new Router();
const localesController = new LocalesController();

localesRouter
	.get('/locales', localesController.getLocales)
	.post('/locales', localesController.createNewLocale);

module.exports = localesRouter;
