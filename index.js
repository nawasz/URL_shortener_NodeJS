const express = require('express');
const routes =  require('./routes/generateShortUrlRoute');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/myDatabase').then(() => console.log('connected to Mongodb')).catch(err => console.error(err));
app.use(express.json())

app.use('/v1',routes);

app.listen('8081',console.log("listening...."))