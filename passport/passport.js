
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql= require('mysql');

module.exports = function(passport){
  
  passport.serializeUser(function(user, done){
    done(null, user);
  });
  
  passport.deserializeUser(function(obj,done){
    done(null,obj);
  });
  
  passport.use('local',new LocalStrategy({
    passReqToCallback: true
  }, function(req,uname,psw,done){
    var config = require('../config/BDConnection');
    // nos conectamos a la base de datos
    var db = mysql.createConnection(config);
    db.connect();
    db.query('SELECT * FROM usuario WHERE nombre = ?',uname, function(err,rows,fields){
      if(err) throw err;
        db.end();
      if(rows.length > 0){
        var user = rows[0];
        if (true) {
          return done (null,{
            id: user.id,
            nombre: user.nombre,
            email: user.email
          });
        }
      }
      
      return done(null,false, req.flash('authmessage','Email o Password incorrecto'));      
    });
  }
  )); 
};