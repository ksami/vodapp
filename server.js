var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.use('/m', function (req, res, next) {
  if(req.cookies.beenHerebefore === 'yes'){
		console.log('Cookies: ', req.cookies);
  } else {
    res.cookie('beenHereBefore', 'yes');
    console.log('Cookies: ', req.cookies);
  }
  next();
});
app.use(express.static('public'));

/*app.get('/', function (req, res) {
  if(req.cookies.beenHerebefore === 'yes'){
		console.log('Cookies: ', req.cookies);
  } else {
    res.cookie('beenHereBefore', 'yes');
    console.log('Cookies: ', req.cookies);
  }
});
app.get('/clear', function (req, res) {
  res.clearCookie('beenHereBefore');
  res.redirect('/');
});
*/

app.listen(3000);
