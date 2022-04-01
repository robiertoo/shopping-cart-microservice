const express = require('express')
var router = express.Router();

const bcrypt = require('bcryptjs')
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        res.json(await User.findAll())
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    const { name, password, email } = req.body

    if(password == null) return res.json({
        message: "Password is empty."
    })

    let salt = bcrypt.genSaltSync(10)
    encryptedPassword = bcrypt.hashSync(password, salt)

    try {
        user = await User.create({
            name,
            email,
            password: encryptedPassword
        })
        res.json(user).status(201)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router