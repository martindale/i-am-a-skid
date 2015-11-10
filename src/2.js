module.exports.go = function (lang) {
	console.log("\nWhat do you want to ask?");
	var something = require('../readline')() || "How do I wipe my own system in " + lang;

	var url = "http://lmgtfy.com/?q=" + encodeURIComponent(something.replace(/^[([A-Za-z0-9_]|\.)]/, '')) + "+" + encodeURIComponent(lang);
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}