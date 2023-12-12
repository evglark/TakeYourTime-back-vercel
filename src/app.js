const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

require('dotenv').config();

const router = require('./router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄' });
});

app.use('/api', router);

module.exports = app;
