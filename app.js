const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const shortId = require('shortid')
const fs = require('fs')
const path = require('path')
const app = express()
const port = process.env.PORT||5000

app.use(morgan('dev'))
app.use(bodyParser.json())
