const express = require('express');
const app = express();
const connectDB = require('./db/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//import routes
const itemRoutes = require('./routes/items');
const paymentRoutes = require('./routes/payments');
const userRoutes= require('./routes/user');
const cartRoutes=require('./routes/cart');
const DteamRoutes=require('./routes/Dteam');

const authRoutes = require('./routes/auth');

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(itemRoutes);
app.use(paymentRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(DteamRoutes);

app.use('/api/auth', authRoutes);

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));