const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const express = require('express');
const User = require('../models/User');
let router = express.Router()

router.post('/login', async (req, res) => {
    if(req.body.password == null) return res.json({
        message: "Password is empty."
    })

    let user = await User.findOne({
        where: {
            "email": req.body.email
        }
    })

    if(bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 300
        })

        return res.json({
            auth: true,
            token: token
        })
    }

    res.status(401).json({
        message: 'Invalid credentials'
    })
})

router.post('/logout', (req, res) => {
    return res.json({
        auth: false,
        token: null
    })
})

module.exports = router