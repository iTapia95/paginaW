const express = require("express");
const path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
const BodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require ('express-session');
const routes = require('./routes/web');
var passport = require ('passport');

// require('./passport/passport')(passport);

const app = express();


//
app.use(session({
  secret: 'claveSecretaIDQ',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

//session
app.use(passport.initialize());
app.use(passport.session());


//starting the server
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use((req, res, next) =>{
  console.log(`${req.url} -${req.method}`);
  next();
});
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start the resver
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});