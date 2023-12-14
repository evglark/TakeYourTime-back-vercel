const { Router } = require('express');

const localesController = require('./controller');

const localesRouter = new Router();

localesRouter
	.get('/locales', localesController.getLocales)
	.post('/locales', localesController.createNewLocale)
	.put('/locales', localesController.editOldLocale)
	.delete('/locales', localesController.deleteLocale);

module.exports = localesRouter;
