var friendsData = require('../data/friends.js');
console.log(friendsData);
module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
		console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);

    });
    
    //could not get anything to post to array in friends.js. Lost on how to make everything work when its not 
		// like the hot restaurant example.  Had some help from tutor, but still lost. Never got as far as making a best
		//match. See you at office hours!

	app.post('/api/friends', function(req, res) {
		console.log(req.body);

		

		var newFriend = req.body;
	    var newImg = req.body.newImg;
	    var newName = req.body.newName;
			var newScores = req.body.scores;
			

			if (friendsData.length > 1) {
				friendsData.push(newFriend);
				friendsData.push(newScores)
				res.json(true) }

	    console.log(newFriend);
	    //console.log(newImg);
	    console.log(newName);
	    
	    

		

	
  		

  	});
  	
}