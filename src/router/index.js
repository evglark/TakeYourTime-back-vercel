const express = require('express');

const localesRouter = require('../models/locale');
const tasksRouter = require('../models/task');

const router = express.Router();

router
	.use(localesRouter)
	.use(tasksRouter);

module.exports = router;
