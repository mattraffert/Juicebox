require('dotenv').config();

//console.log(process.env.JWT_SECRET);


const express = require('express');
require('dotenv').config()
const server = express();


const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

