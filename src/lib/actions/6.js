module.exports.go = function (lang) {
	var url = "http://stackoverflow.com/search?q=" + encodeURIComponent(lang);
	require('open')(url);
	console.log("\nLook! A link for you: " + url);
}