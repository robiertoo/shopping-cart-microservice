const Sequelize = require('sequelize')
const database = require('../db')
const Item = require('./Item')

const Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

Product.belongsTo(Item)

module.exports = Product