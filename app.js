const express = require('express')
const app = express()
const compression = require('compression')
const env = require('dotenv').config()

// init the routes
const routes = require('./control/routes')

app	.use(compression())
	.use(express.static('views'))
	.use(express.static(`${__dirname}/assets`))
	.set('view engine', 'ejs')

app	.use('/', routes)

app.listen(process.env.HOST, () => {
	console.log('Listening.. port' + process.env.HOST)
})
