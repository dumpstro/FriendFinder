var path = require("path");
//var express = require("express");
var friends = require("./../data/friends.js")
//var app = express();
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

module.exports = function(app) {
    //route to /api/friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    //post route to handle survey results
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newScores = newFriend.scores;
        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < newScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - newScores[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
                console.log(matchName)
                console.log(matchImage)
            }
        }

        friends.push(newFriend);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

        //function getScore(total, score) {
        //    return total + score;
        //}
        //for (var i = 0; i <= friends.length; i++) {
        //    var currentScores = friends[i].scores;
        //    var score = reduce.getScore(0, currentScores);

        //}

        //scores.reduce((total,currentValue) => {
            //return total + currentValue;


    });



};