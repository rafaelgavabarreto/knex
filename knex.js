const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: settings.client,
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});

var someId = process.argv[2];

knex.select('*')
  .from('famous_people')
  .where('first_name', '=', someId)
  .then(function(rows) {
    let results = rows
    console.log("Found " + rows.length + " person(s) by the name '" + someId + "':");
    for (let i = 0; i < rows.length; i++) {
      console.log("- ", (i + 1), ":", results[i].first_name, results[i].last_name, "born '" + results[i].birthdate.toLocaleDateString() + "'");
    }
    knex.destroy();
  })
  .catch(function(error) {
    console.error(error)
  });