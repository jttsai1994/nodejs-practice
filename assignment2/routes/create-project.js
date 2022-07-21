const express = require('express');
const path = require('path');
const router = express.Router();

const projectController = require('../controllers/project');
// const mongoClient = require('mongodb').MongoClient;
// const mongoObjectID = require('mongodb').ObjectId;
// const mongo = 'mongodb://localhost:27017/hweb';
// let mongodb = null;

router.get('/create-project',projectController.getAddProject);

router.post('/create-project',projectController.postAddProject);


module.exports = router;
