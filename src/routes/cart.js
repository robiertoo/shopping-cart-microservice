const express = require("express");

var router = express.Router()

const Product = require("../models/Product");

router.get('/', async (req, res) => {
    try {
        let products = await Product.findAll();
        res.send(products)
    } catch (error) {
        res.send(error).status(400)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let product = await Product.findByPk(req.params.id)
        res.send(product)
    } catch (error) {
        res.send(error).status(400)
    }
})

router.post('/', async (req, res) => {
    try {
        let product = await Product.create(req.body)
        res.send(product).status(201)
    } catch (error) {
        res.send(error).status(400)
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        let product = await Product.findByPk(id)
    
        product.set(req.body)

        res.send(await product.save()).status(204)

    } catch (error) {
        res.send(error).status(400)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        let product = await Product.findByPk(id)
        res.send(await product.destroy()).status(204)
    } catch (error) {
        res.send(error).status(400)
    }
})

module.exports = router
