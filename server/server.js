// server/server.js
const express = require('express');
const Sequelize = require('sequelize');
const pg = require('pg');

const app = express();
const sequelize = new Sequelize('my_database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Set up routes
app.use('/api/items', require('./routes/items'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});