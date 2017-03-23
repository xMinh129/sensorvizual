module.exports = function(app){
  var sqlite3 = require('sqlite3').verbose();
  var db;
  var data;
  var dataArray=[];

  //create Database in sqlite and pushing data to it, then read it

  function createDb() {


      db = new sqlite3.Database('temp.sqlite3', createTable);
  }

  function createTable() {

      db.run("CREATE TABLE IF NOT EXISTS Temperature (temp FLOAT)", insertRows);
  }

  function insertRows(data) {
      var data=temp;

      var stmt = db.prepare("INSERT INTO Temperature VALUES (?)");


      stmt.run(data);


      stmt.finalize(readAllRows);
  }

  function readAllRows() {

      db.all("SELECT rowid AS id, temp FROM Temperature", function(err, rows) {
          rows.forEach(function (row) {
              dataArray.push(row.temp)
              console.log(dataArray);
          });
      });
  }


  var five = require('johnny-five');

  five.Board().on('ready', function() {
    var temperature = new five.Thermometer({
      controller: 'LM35',
      pin: 0
    });

    temperature.on('data', function() {

      //console.log('Address: 0x' + this.address.toString(16));
      temp = this.celsius;
      createDb();
    });
  });

//passing the data as temperature
  app.get('/', function(req,res){
      res.render('index', {temperature:  data});
  });
}
