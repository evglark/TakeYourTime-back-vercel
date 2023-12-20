const { Router } = require('express');

const careersController = require('./controller');

const careersRouter = new Router();

careersRouter
	.get('/careers', careersController.getCareers)
	.post('/careers', careersController.createNewCareers)
	.delete('/careers', careersController.deleteCareers);

module.exports = careersRouter;
