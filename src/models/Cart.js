const Sequelize = require('sequelize')
const database = require('../db')
const Item = require('./Item')

const Cart = database.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

Cart.hasMany(Item)

module.exports = Cart