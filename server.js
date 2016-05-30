var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.get('/', function (req, res, next) {
  if(req.cookies.beenHereBefore === 'yes'){
		console.log('Cookies: ', req.cookies);
  } else {
    res.cookie('beenHereBefore', 'yes');
    console.log('Cookies: ', req.cookies);
  }
  next();
});

app.get('/clear', function (req, res, next) {
  res.clearCookie('beenHereBefore');
  res.redirect('/');
  next();
});

app.use(express.static('public'));

app.listen(3000);
