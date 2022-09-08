const express = require('express');
const app = express();
const connectDB = require('./db/db');

//import routes
const itemRoutes = require('./routes/items');

app.use(itemRoutes);

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));