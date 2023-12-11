const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');

require('dotenv').config();

const env = require('./helpers/environments');
const middlewares = require('./middlewares');
const router = require('./router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

app.use(session({
	resave: false, // don't save session if unmodified
	saveUninitialized: false, // don't create session until something stored
	secret: env.getEnvironment('SECRET_WORD'),
}));

app.get('/', (req, res) => {
	res.json({ message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄' });
});

app.use('/api', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
