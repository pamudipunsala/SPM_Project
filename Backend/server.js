const express = require('express');
const app = express();
const connectDB = require('./db/db');

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));