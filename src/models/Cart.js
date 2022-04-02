const Sequelize = require('sequelize')
const database = require('../db')
const Item = require('./Item')
const User = require('./User')

let Cart = database.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

module.exports = Cart