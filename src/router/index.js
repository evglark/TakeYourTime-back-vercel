const express = require('express');

const localesRouter = require('../modules/locales');
const tasksRouter = require('../modules/tasks');

const router = express.Router();

router
	.use(localesRouter)
	.use(tasksRouter);

module.exports = router;
