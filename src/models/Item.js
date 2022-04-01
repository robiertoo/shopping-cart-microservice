const Sequelize = require('sequelize')
const database = require('../db')
const Product = require('./Product')
const Cart = require('./Cart')

let Item = database.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

Item.belongsTo(Cart)
Item.belongsTo(Product)

module.exports = Item