const Sequelize = require('sequelize');

const sequelize = require('../server');

const Item = sequelize.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Item;