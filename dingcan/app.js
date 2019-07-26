const express = require('express');
const controller = require('./controller/controller.js');
const app = express();

app.get('/dingcan',controller.saveData);
app.get('/all',controller.showAll)
app.use(express.static('public'));
app.listen(4000);