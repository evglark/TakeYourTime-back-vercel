const { Router } = require('express');

const TablesController = require('./controller');

const tablesRouter = new Router();
const tablesController = new TablesController();

tablesRouter
	.get('/tables', tablesController.getTables);

module.exports = tablesRouter;
