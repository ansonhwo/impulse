'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 9999

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.listen(PORT, () => `Listening on ${PORT}`)
