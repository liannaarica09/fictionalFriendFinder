var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        console.log("newFriend is " + newFriend.scores);
        var closestMatches = [];
        var closestMatchValue = 50000;

        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;
            console.log("friendData[i].charName: " + friendsData[i].charName);
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                console.log(newFriend.scores, friendsData[i].scores[j]);
                var difference = Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
                totalDifference += difference;
            }
            console.log("totalDifference is " + totalDifference);
            if (totalDifference < closestMatchValue) {
                closestMatchValue = totalDifference;
                closestMatches.push(friendsData[i]);
            }
        }

        friendsData.push(req.body);
        console.log(closestMatches);
        res.json(closestMatches);
    });
};