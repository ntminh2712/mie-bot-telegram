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
var webAppCallback = "http://a681d4a3.ngrok.io";


app.get('/setWebhook', (req, res) => {
  var response = axios.get(url + "/setWebhook?url=" + webAppCallback)
  res.send(response);
});


app.post('/', function(req, res) {
  var data = req.body.message;
  console.log(data.update_id)
  var id = data.from.id
  console.log(id)
  var new_chat_member = data.new_chat_member
  if (new_chat_member != null) {
    var fullname = new_chat_member.first_name + " " + new_chat_member.last_name
    var messageQuote = "Xin chào, " + fullname + " vui lòng đọc nội quy trong phần description của nhóm nhé để tránh bị ban khỏi nhóm nhé. \n Xin Cảm ơn!"
    if (fullname != "" && fullname != null) {
      sendMessage(id, messageQuote)
    }
  }
  
  
  res.status(200).send("OK");
});

function sendMessage(id, messsage){
  var response = axios.get(url + "/sendMessage?chat_id=" + id + "&text=" + messsage);
}

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("App is running on port " + port);
});
// var port_number = server.listen(process.env.PORT || 3000);
// app.listen(port_number); 