const Sequelize = require('sequelize')
const database = require('../db')
let Product = require('./Product')
let Cart = require('./Cart')

let Item = database.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

module.exports = Item