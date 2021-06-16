const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
let scoreboard = [{name:"John", timetaken:"30s"},{name:"John1", timetaken:"100s"}];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/',function(req, res){
  res.send({'result':'ready to serve'});
})
app.get('/getscoreboard',function(req, res){
  res.status(200).send({result: scoreboard})
})
app.post('/postscoreboard',function(req, res){
  console.log(req.body);
  scoreboard.push(req.body);
  res.status(200).send({result: 'scoreboard'})
})
app.listen(port, function(){
  console.log('running on server');
})