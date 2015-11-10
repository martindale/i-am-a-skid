module.exports.go = function (lang) {
	var url = "http://lmgtfy.com/?q=learn+" + encodeURIComponent(lang);
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}