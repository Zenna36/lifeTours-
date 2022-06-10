const express = require('express')
const server = express()
const cors = require ('cors')
const helmet = require('helmet')
const router = require('../src/app/routes/router')
const PORT = process.env.PORT || 3001

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use('/api', router)

server.get('/', (req, res) => {
    res.json({
        'All tours': `http://localhost:${PORT}/api/lostintime`,
        'All profiles':`http://localhost:${PORT}/api/profile`,
        // 'All singleRoute':`http://localhost:${PORT}/api/singleRoute/`
    })
})

server.listen(PORT, ()=> {
    console.log(`Server is listening on: ${PORT}`)
})