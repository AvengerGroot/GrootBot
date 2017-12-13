exports.run = (client, message, args) => {
var qs = require("querystring");

var giphy_config = {
    "api_key": "dc6zaTOxFJmzC",
    "rating": "r",
    "url": "http://api.giphy.com/v1/gifs/random",
    "permission": ["NORMAL"]
};

var request = require("request");

function get_gif(tags, func) {
	var params = {
		"api_key": giphy_config.api_key,
		"rating": giphy_config.rating,
		"format": "json",
		"limit": 1
	};
	var query = qs.stringify(params);

	if (tags !== null) {
		query += "&tag=" + tags.join('+')
	}

	var request = require("request");
	//console.log(query)
	request(giphy_config.url + "?" + query, function (error, response, body) {
		if (error || response.statusCode !== 200) {
			console.error("giphy: Got error: " + body);
			console.log(error);
		}
		else {
			try{
				var responseObj = JSON.parse(body)
				func(responseObj.data.id);
			}
			catch(err){
				func(undefined);
			}
		}
	}.bind(this));
}

exports.giphy = {
	usage: "<image tags>",
	description: "returns a random gif from giphy matching the tags passed",
	process: function(bot, msg, suffix) {
		var tags = suffix.split(" ");
		get_gif(tags, function(id) {
		if (typeof id !== "undefined") {
			msg.channel.sendMessage( "http://media.giphy.com/media/" + id + "/giphy.gif [Tags: " + (tags ? tags : "Random GIF") + "]");
		}
		else {
			msg.channel.sendMessage( "Invalid tags, try something different. [Tags: " + (tags ? tags : "Random GIF") + "]");
		}
		});
	}
}
}
