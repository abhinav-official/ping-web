/*
*  Primary File For The API
*
*/

// Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");

// Declare the app
var app = {};

// Declare a global that strict mmode should catch
foo = bar;

// Init function
app.init = function() {
  // Start the server
  server.init();
  // Start the workers
  workers.init();
  // Start the CLI ,But at last
  setTimeout(function() {
    cli.init();
  }, 50);
};

// Execute
app.init();

// Export the app
module.exports = app;
