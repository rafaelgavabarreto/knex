const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: settings.client,
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});
var first_name = process.argv[2];
var last_name = process.argv[3];
var birthdate = process.argv[4];

knex('famous_people')
.insert([{first_name: first_name, last_name: last_name, birthdate: birthdate}])
.then(function() {
  knex.destroy();
})
.catch(function(error) {
  console.error(error)
});