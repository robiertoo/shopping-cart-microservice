require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']
    if(!token) return res.status(401).json({
        message: 'No token provided.'
    })

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if(error) return res.status(500).json({
            message: 'Failed to authenticate token.'
        })

        req.userId = decoded.id
        next()
    })
}

module.exports = verifyJWT