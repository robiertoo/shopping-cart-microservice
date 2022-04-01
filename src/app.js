(async () => {
    const express = require('express')
    const app = express()

    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    const database = require('./db')

    const productsRouter = require('./routes/products')

    await database.sync()

    app.get('/', (req, res) => {
        res.send({
            message: 'welcome'
        })
    })

    app.use('/products', productsRouter)

    app.listen(3000, () => console.log('Server running...'))
})()