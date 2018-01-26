//npm install -> installs package
//require() -> gets package for use
var cat = require("cat-me"); //Looks for package/file cat-me in node modules.
var joke = require("knock-knock-jokes");
var faker = require("faker");
//requiring is usually done at the top of a file

console.log(cat()); //use package
console.log(joke()); //use another package