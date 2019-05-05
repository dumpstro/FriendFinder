module.exports = function(app) {
    //route to /api/friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    },
    //post route to handle survey results
    app.get("/api/friends/:friend", function (req, res) {
        

    })

}