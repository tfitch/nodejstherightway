"use strict"
const
	fs = require('fs'),
	spawn = require('child_process').spawn,
	filename = process.argv[2];
if (!filename) {
	throw Error("A file to watch must be specificed!");
}
fs.watch(filename, function() {
	let ls = spawn('ls', ['-lh', filename]);
	ls.stdout.pipe(process.stdout);
//	console.log("File " + filename + " just changed!");
});
console.log("Now watching " + filename + " for changes...");
