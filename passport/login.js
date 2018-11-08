var LocalStrategy   = require('passport-local').Strategy;
const dbConnection = require('../config/BDConnection');

module.exports = function(passport){
  passport.use('login',new LocalStrategy(
    {
      passReqToCallback: true
    },
    function(req,username,password,done){
      //console.log('ORA!');
      const connection = dbConnection();
      connection.query('select * from usuario where nombre = "' + req.body.username +'"', (err, result) => {
        if(result[0]===undefined){
          return done(null,false, req.flash('message','Usuario o contraseña incorrecto'));  
        }else{
          if(req.body.password == result[0].password){
            return done (null,{
              nombre: result[0].nombre,
              tipo : result[0].tipo
            });
          }
          else{
            return done(null,false, req.flash('message','Usuario o contraseña incorrecto'));  
          }
        }
      });
    }
  )); 
};