const express = require('express');
const { createUser, getAllUsers, loginUser } = require('../controllers/user.controller');
const userRouter = express.Router();
const User = require("../models/User");


userRouter.get('/get', getAllUsers);
userRouter.get('/login', loginUser);
userRouter.post('/register', createUser);

module.exports = userRouter;