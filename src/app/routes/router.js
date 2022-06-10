const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3001

router.get('/', (req, res) =>
    res.json({
        'All tours': `https://localhost:${PORT}/api/lostInTime`,
        'All profiles':`https://localhost:${PORT}/api/profile`,
    })
)

router.use('/lostInTime', require ('./api/lostInTimeRoute'))
router.use('/profile', require ('./api/profileRoute'))


module.exports = router

