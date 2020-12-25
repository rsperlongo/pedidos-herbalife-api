const express = require('express');
const path = require('path');
const cookieParse = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://ricardo:carmem@2018@ricardo0.vrxdu.mongodb.net/pedidos-herbalife',
    {useNewUrlParser: true}
).then(() => console.log('connection successful')).catch((err) => console.log(console.error(err)));

const productsRouter = require('./routes/products');
const flavoursRouter = require('./routes/flavours');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParse());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);
app.use('/flavours', flavoursRouter);

app.listen(3000);

module.exports = app;