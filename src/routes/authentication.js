const jwt = require('jsonwebtoken')

const express = require('express');
const res = require('express/lib/response');
let router = express.Router()

router.post('/login', (req, res) => {
    if(req.body.username === 'roberto' && req.body.password === 123) {
        const id = 1
        const token = jwt.sign({ id }, process.env.SECRET, {
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