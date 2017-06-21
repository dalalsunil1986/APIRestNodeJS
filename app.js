const express       = require('express')
const morgan        = require('morgan')
const bodyParser    = require('body-parser')
const path          = require('path')
moment              = require('moment')
mongoose            = require('mongoose')

const app           = express()


// DB Connection & promises configuration
mongoose.connect('mongodb://localhost:8081/todo')
mongoose.Promise = require('bluebird')

// Middlewares & Config
// ---  Middleware : treat requests as JSON
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// ---  Logger
app.use(morgan('combined'))

// Routing
router = express.Router()
app.use(router)
require(path.join(__dirname, 'routes'))
require(path.join(__dirname, 'routes', 'todo'))

// Listen and serve
app.listen(process.env.SERVER_PORT || 3000)
