module.exports.go = function (lang) {
	var url = "http://lmgtfy.com/?q=" + encodeURIComponent(lang) + "+basics";
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}