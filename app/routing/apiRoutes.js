var friendData = require("../data/friends")
var express = require("express")
var router = express.Router()
var app = express()


 router.get("/api/friends", function(req, res) {
    res.json(friendData)
  })

 router.post("/api/friends", function(req, res) {
    console.log(friendData)
  })


  // ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
      res.json(friends);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
      // set defaults for the bestmatch placeholder
      console.log(req.body.name);
      console.log(req.body);

      let newFriend = req.body;
      let newFriendScores = newFriend["scores[]"].map(parseFloat);

  })

} // closes app

module.exports = router