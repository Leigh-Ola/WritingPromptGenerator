// a basic express server that serves static files from the /dist

// grab the packages we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080

// set the static files location /dist
app.use(express.static(__dirname + '/dist'))

// start the server
app.listen(port)
console.log('Server started! At http://localhost:' + port)
