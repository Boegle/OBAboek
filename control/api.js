const request = require('request')
const env = require('dotenv').config()
const parseString = require('xml2js').parseString

const publicKey = process.env.PUBLICKEY
const path = 'search'
const baseUrl = 'https://zoeken.oba.nl/api/v1/' + path + '/'
const search = 'q=boek'

function getData () {
	request(baseUrl + '/?authorization=' + publicKey + '&' + search + '&refine=true&facet=Type(book)', function (error, response, body) {
		parseString(body, function (err, result) {
			console.log(result)
		})
	})
}

module.exports = {
	getData
}