var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var Redis = require('ioredis');
var redisClient = new Redis();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.get('/', function (req, res, next) {
  //console.log(req.cookies);
  next();
});

app.get('/clear', function (req, res, next) {
  res.clearCookie('vodapp');
  res.redirect('/');
});

app.get('/getHistory', function (req, res, next){
  var resultArr = [];
  redisClient.get(req.cookies.vodapp, function(err, result){
    resultArr = JSON.parse(result);
    res.send(resultArr);
  });
});

app.post('/movie', function (req, res, next) {
  //console.log(req.body.watchedMovie);
  if(typeof req.body.watchedMovie === "undefined" || typeof req.body.watchedMovie.title === "undefined") {
    // bad request
    res.sendStatus(400);
    return;
  }

  var resultArr =[];
  var watchedMovie = req.body.watchedMovie.title;
  if(req.cookies && req.cookies.vodapp){
    redisClient.get(req.cookies.vodapp, function(err, result){
      if(result != null){
        resultArr = JSON.parse(result);
        var index = resultArr.indexOf(watchedMovie);
        if(index >= 0){
          resultArr.splice(index, 1);
        }
      }
      resultArr.push(watchedMovie);
      redisClient.set(req.cookies.vodapp, JSON.stringify(resultArr));
    });
  } else {
    var randomId = generateRandomId();
    redisClient.set(randomId, JSON.stringify([watchedMovie]));
    res.cookie('vodapp', randomId);
    res.end();
  }
});

//gotten from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function generateRandomId(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
app.use(express.static('public'));

app.listen(8080);
