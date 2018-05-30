const express = require('express')
const router = express.Router()
const api = require('./api')

console.log(api)

api.getData()

// define the home page route
router.get('/', function (req, res) {
    //render homepage
    res.render('index')
})

module.exports = router