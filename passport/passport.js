const login = require('./login');

module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user);
  });
  
  passport.deserializeUser(function(obj,done){
    done(null,obj);
  });
  
  login(passport);
 
};