module.exports.go = function (lang) {
	console.log("\nWhat skill do you want to learn?");
	var something = require('../readline')() || "stuffing a toilet plunger up butt";

	var url = "http://lmgtfy.com/?q=" + encodeURIComponent(something) + "+tutorial+" + encodeURIComponent(lang);
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}