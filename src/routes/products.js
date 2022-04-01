const express = require("express");

var router = express.Router()

const Product = require("../models/Product");

router.get('/', async (req, res) => {
    try {
        let products = await Product.findAll();
        res.send(products)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let product = await Product.findByPk(req.params.id)
        res.send(product)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, price } = req.body

    try {
        let product = await Product.create({
            name, price
        })
        res.send(product)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        let product = await Product.findByPk(id)
    
        product.set(req.body)

        res.send(await product.save())

    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        let product = await Product.findByPk(id)
        res.send(await product.destroy())
    } catch (error) {
        res.send(error.errors)
    }
})

module.exports = router
