var friendData = require("../data/friends")
var express = require("express")
var router = express.Router()
var app = express()


 router.get("/api/friends", function(req, res) {
    res.json(friendData)
  })

 router.post("/api/friends", function(req, res) {
    friendData.push(req.body)
    console.log(friendData)
  })


module.exports = router