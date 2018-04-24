// Require the Friends JS file
var friends = require('../data/friends.js');

// Runs the exports function from Friends JS as with app below to get and pull requests
module.exports = function(app){

	// Get Requests
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// Post Requests
	app.post('/api/friends', function(req, res){


// Creates a variable called bestFriends to hold name and photo info from responses
		var bestFriends = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

// Captures all data from the surveys
		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;
// Creates notCommon variable to compare all friend results
		var notCommon = 0;

		// Loop through all the survey results
		for  (var i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			notCommon = 0;

			// Loop through all the scores of each friend
			for (var j=0; j< friends[i].scores[j]; j++){

				// Calculates difference between the scores and plugs them into the notCommon variable
				notCommon += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current closestMatch
				if (notCommon <= bestFriends.friendDifference){

					// Reset the closestMatch to be the new friend. 
					bestFriends.name = friends[i].name;
					bestFriends.photo = friends[i].photo;
					bestFriends.friendDifference = notCommon;
				}
			}
		}

		// Saves info to DB
		friends.push(userData);

		// Result of closestMatch
		res.json(closestMatch);

	});

}
