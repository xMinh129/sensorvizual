
var PubNub = require('pubnub');
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
  };*/
  pubnub.publish({
    channel: channel,
    message: {
      eon: {
        'temperature': temp
      }
    }
  });
}

// Johnny-Five
// Using a temperature sensor, type LM35DZ
// This requires OneWire support using the ConfigurableFirmata

var five = require('johnny-five');

five.Board().on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'LM35',
    pin: 0
  });

  temperature.on('data', function() {
    console.log(this.celsius + '°C', this.fahrenheit + '°F');
    //console.log('Address: 0x' + this.address.toString(16));
    temp = this.celsius;
  });
  setInterval(publish, 3000);
});
