const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const express = require('express');
const User = require('../models/User');
let router = express.Router()

router.post('/login', async (req, res) => {
    let { password, email } = req.body

    if(!password || !email) return res.json({
        message: "Password or Email is empty."
    })

    let user = await User.findOne({
        where: {
            email
        }
    })

    if(!user) return res
        .status(401)
        .json({
            message: "Invalid credentials."
        })

    if(bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 500
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