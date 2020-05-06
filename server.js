// # SimpleServer
// A simple chat bot server
var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var axios = require('axios');
var router = express();


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var server = http.createServer(app);
var token = "1248238099:AAExxw3u8HXo4rjhAk0ea3bbqq9PFEV5H50";
var url = "https://api.telegram.org/bot" + token;
var webAppCallback = "https://mie-bot-telegram.herokuapp.com/";


app.get('/setWebhook', (req, res) => {
  var response = axios.get(url + "/setWebhook?url=" + webAppCallback)
  res.send(response);
});


app.post('/', function(req, res) {
  var entries = req.body;
  // send(entries)
  // for (var entry of entries) {
  //   var messaging = entry.messaging;
  //   for (var message of messaging) {
  //     var senderId = message.sender.id;
  //     var name = message.name
  //     if (message.message) {
  //       // If user send text
  //       if (message.message.text) {
  //         handlerMessage(message.message.text, senderId,name)
  //       }
  //     }
  //   }
  // }
  sendMessage(992734014, "hahahaah")


  sendMessage(992734014, req.body + "----------\n" + req.body.entries)
  

  res.status(200).send("OK");
});

app.get('/testSendMessage', function(req,res) {
    sendMessage(992734014, "maays thawngf mawjt lonf")
})


function sendMessage(id, messsage){
  var response = axios.get(url + "/sendMessage?chat_id=" + id + "&text=" + messsage);
  res.status(200).send("OK")
}






// app.post('/', function(req, res) {


//   res.status(200).send("OK");
// });

// function sendMessage(senderId, message) {
//   request({
//     url: 'https://graph.facebook.com/v2.6/me/messages',
//     qs: {
//       access_token: "EAAEiYFKlCKIBAFACXjgh1VZAbwa8zjFsdRqAQlTmPUBd6g4PmgPrELgYZCmS4SFe71gU2ipXXvOh628bVRZAT4LQmSN42X91iKy4REJcmdjZCtsBu7jkG1d6VPHRZB11Q9aRjPYqppscKXFAznnFSNuTYgMrS6pLMxycZBwjnfZCQZDZD",
//     },
//     method: 'POST',
//     json: {
//       recipient: {
//         id: senderId
//       },
//       message: {
//         text: message
//       },
//     }
//   });
// }


// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
// app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1");

// server.listen(app.get('port'), app.get('ip'), function() {
//   console.log("Chat bot server listening at %s:%d ", app.get('ip'), app.get('port'));
// });
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("App is running on port " + port);
});
// var port_number = server.listen(process.env.PORT || 3000);
// app.listen(port_number); 