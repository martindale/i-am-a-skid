var fs = require('fs');

module.exports = function () {
	process.stdin.resume();
	var response = fs.readSync(process.stdin.fd, 100, 0, "utf8");
	process.stdin.pause();
	return response[0].substring(0, response[1] - 2);
};