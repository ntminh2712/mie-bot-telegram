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
var server = http.createServer(app);
var token = "1604263290:AAG0mF252-Bqp0dEdDzuQ2DoS8at4cuRrMI";
var url = "https://api.telegram.org/bot" + token;
var webAppCallback = "https://nongtraibot.herokuapp.com/";


app.get('/setWebhook', (req, res) => {
  var response = axios.get(url + "/setWebhook?url=" + webAppCallback)
  res.send(response);
});


app.post('/', function(req, res) {
  // var data = req.body.message;
  // if (data == null) {
  //   console.log(data.update_id)
  //   console.log("ready");
  //   res.status(200).send("OK");
  // }
  // console.log(data.update_id)
  // var id = data.chat.id
  // console.log(id)
  // var new_chat_member = data.new_chat_member
  // var message_id = data.message_id
  // if (new_chat_member != null) {
  //   var fullname = new_chat_member.first_name + " " + new_chat_member.last_name
  //   var messageQuote = "Xin chào, " + fullname + " vui lòng đọc nội quy trong phần description của nhóm để tránh vi phạm bị ban khỏi nhóm nhé. \n Xin Cảm ơn!"
  //   if (fullname != null) {
  //     // sendMessage(id, messageQuote)
  //     removeMessageAddmember(id,message_id)
  //   }
  // }
  
  
  res.status(200).send("OK");
});

function sendMessage(id, messsage){
  var response = axios.get(url + "/sendMessage?chat_id=" + id + "&text=" + encodeURIComponent(messsage));
  console.log(response)
}

function removeMessageAddmember(chat_id, messsage_id) {
  var response = axios.get(url + "/deleteMessage?chat_id=" + chat_id + "&messsage_id=" + messsage_id);
  console.log(response)
}

app.get('/sendMessage', function(req, res) {
  var response = axios.get(url + "/sendMessage?chat_id=" + id + "&text=" + messsage);

})

const port = process.env.PORT || 8000;
// server.listen(port, () => {
//   console.log("App is running on port " + port);
// });
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number); 