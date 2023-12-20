const express = require('express');

const careersRouter = require('../modules/career');
const localesRouter = require('../modules/locales');
const tasksRouter = require('../modules/tasks');

const router = express.Router();

router
	.use(careersRouter)
	.use(localesRouter)
	.use(tasksRouter);

module.exports = router;
