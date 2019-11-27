const express = require('express')
const cors = require('cors')
const sobre = require('./json/sobre')

const app = express()
const port = 80

app.use(cors())

app.get('/sobre', (req, res, next) => {
    res.json(sobre)
})

app.listen(port)