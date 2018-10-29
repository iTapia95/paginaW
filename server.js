const express = require("express");
const path = require('path');
const BodyParser = require('body-parser');

var passport = require ('passport');
var flash = require('connect-flash');
var session = require ('express-session');

const app = express();

const routes = require('./routes/web');

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

require('./passport/passport')(passport);

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