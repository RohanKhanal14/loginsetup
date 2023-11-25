const express = require('express');
const { connect } = require('./db/connection');
const userRouter = require('./routes/user.route');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',userRouter);
connect();


module.exports = app;