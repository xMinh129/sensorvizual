
/* var PubNub = require('pubnub');
var pubnub = new PubNub({
  publish_key: 'pub-c-ec55a238-d206-4883-87da-d3d27f2c2be2',//use your own publish key
  subscribe_key: 'sub-c-ae3a7086-0cda-11e7-b8f1-0619f8945a4f',
  ssl: true//use your subscribe key
});

 var channel = 'temperature-lm35dz';

var temp = 0;

function publish() {
  /*var data = {
    'temperature': temp,
  };
  pubnub.publish({
    channel: channel,
    message: {
      eon: {
        'temperature': temp
      }
    }
  });
}*/

// Welcome to Johny
// Johnny-Five
// Using a temperature sensor, type LM35DZ
// This requires OneWire support using the ConfigurableFirmata
//Connecting to a file/database in squlite
var express = require('express');
var app = express();
var tempController = require('./controllers/tempController');
//set view engine
app.set('view engine', 'ejs');
//static file - serve CSS
app.use(express.static('./public'));
//render Controller
tempController(app);


//listen on port 3000
app.listen(3000, function() {
    console.log("The frontend server is running on port 3000!");
});
