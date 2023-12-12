const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

require('dotenv').config();

const env = require('./helpers/environments');
const router = require('./router');
const connect = require('./db');

// const MONGO_URL = env.getEnvironment('MONGO_URL');
const POSTGRES_URL = env.getEnvironment('POSTGRES_URL');

const app = express();

// connect.mongo(MONGO_URL);
connect.postgres(POSTGRES_URL);

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
