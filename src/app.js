(async () => {
    const verifyJWT = require('./services/verifyJWT')
    const express = require('express')
    const app = express()

    const database = require('./db')

    const productsRouter = require('./routes/products')
    const cartRouter = require('./routes/cart')
    const authRouter = require('./routes/authentication')
    const usersRouter = require('./routes/user')

    const bodyParser = require('body-parser')

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    await database.sync()

    app.get('/', (req, res) => {
        res.send({
            message: 'welcome'
        })
    })

    app.use('/auth', authRouter)
    app.use('/products', verifyJWT, productsRouter)
    app.use('/carts', verifyJWT, cartRouter)
    app.use('/users', usersRouter)

    app.listen(3000, () => console.log('Server running...'))
})()