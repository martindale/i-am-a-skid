module.exports.go = function (lang) {
	console.log("\nWhat do you want to make?");
	var something = require('../readline')() || "fun of myself on an online hacking forum";

	var url = "http://lmgtfy.com/?q=how+to+make+" + encodeURIComponent(something) + "+in+" + encodeURIComponent(lang);
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}