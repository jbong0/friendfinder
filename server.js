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

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  friends.push(newcharacter);

  res.json(newcharacter);
});


app.listen(PORT, function() {
  console.log("Router listening on PORT: " + PORT)
})
