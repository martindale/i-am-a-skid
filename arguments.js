'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
	version: '1.0.0',
	addHelp: true,
	description: 'i-am-a-skid',
	prog: 'i-am-a-skid'
});
parser.addArgument(
	['--language'],
	{
		help: 'Specifies the programming language you are seeking help for.'
	}
	);
module.exports = parser.parseArgs();