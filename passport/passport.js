var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){

passport.serializeUser(function(user, done){
done(null, user);
});

passport.deserializeUser(function(obj,done){
done(null,obj);
});

passport.use(new LocalStrategy({
passReqToCallback: true

}, function(req,email,password,done){
console.log(email);
return;
}
))

};