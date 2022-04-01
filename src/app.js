(async () => {
    const express = require('express')
    const app = express()

    const database = require('./db')

    const productsRouter = require('./routes/products')
    const cartRouter = require('./routes/cart')

    const bodyParser = require('body-parser')

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    await database.sync()

    app.get('/', (req, res) => {
        res.send({
            message: 'welcome'
        })
    })

    app.use('/products', productsRouter)
    app.use('/cart', cartRouter)

    app.listen(3000, () => console.log('Server running...'))
})()