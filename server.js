const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the Expense API</h1>`);
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/api/v1/transactions', transactions);

app.listen(
  PORT,
  console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
