const express = require('express')
const bp = require('body-parser')

const app = express()
const port = 4001

app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send("something")
})