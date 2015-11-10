'use strict';

module.exports = function () {

	var args = require('./arguments');
	var readline = require('./readline');

	while (!args.language) {
		console.log("Which programming language are you seeking help for? (i.e. C#, PHP): ");
		args.language = readline();
	}

	console.log("\nOkay, you little skid. We're going to find you some %s help.\n", args.language);
	console.log("What do you want to do? Enter a number.\n");
	console.log("\t1: Make something");
	console.log("\t2: Ask a question");
	console.log("\t3: Learn to program in %s", args.language);
	console.log("\t4: Learn a cool %s skill (ex. theming, routing)", args.language);
	console.log("\t5: Make a RAT/booter/virus in %s!!11!!", args.language);
	console.log("\t6: HELP PLEASE");
	console.log("\t7: I want someone to make something for me written in %s.", args.language);

	var num = +readline().trim();
	if (isNaN(num) || num < 1 || num > 7) {
		console.log("Lol that's not a number");
	}
	else {
		var go = require('./actions/' + num).go;

		go(args.language);
		console.log("Hit ENTER to continue...");
		readline()

		console.log('\nCongratulations.\n\nSo... Are you still a %s skid? (y/n)', args.language);

		var answer = readline().trim().toLowerCase().substring(0, 1);

		if (answer == 'n')
			console.log('Success.');
		else if (answer == 'y')
			console.log('DIEEEEEEEE KILL IT WITH FIREEEEEEEEE');
		else console.log('I asked you a yes or no question lol...')
	}
}