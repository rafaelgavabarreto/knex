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

var someId = process.argv[2];

knex.select('*')
.from('famous_people')
.where('first_name', '=', someId)
.then(function(rows) {
  console.log(rows);
  knex.destroy();
})
.catch(function(error) {
  console.error(error)
});
