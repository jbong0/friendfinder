var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")
var app = express()
var router = express.Router()

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(apiRoutes)
app.use(htmlRoutes)


app.listen(PORT, function() {
  console.log("Router listening on PORT: " + PORT)
})
