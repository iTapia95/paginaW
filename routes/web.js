const express = require('express');
const router = express.Router();

var controllers = require('.././controllers');
var Auth = require('.././middleware/auth');

var passport = require('passport')

module.exports = function (passport) {
  //seccion de logueo
  router.get('/',function(req, res) {
    res.redirect('/login');
  });
  router.get('/login', controllers.loginController.index);
  router.post('/login', passport.authenticate('login',{
    successRedirect: '/difuser',
    failureRedirect:'/login',
    failureFlash: true
  }));
  router.get('/difuser',Auth.isLogged,function (req, res) {
    if(req.user.tipo==1)
      res.redirect('/home');
    else
      res.redirect('/admin');
  })
  //otras rutas, necesita loguearse : Auth.isLogged
  router.get('/home',Auth.isLogged,controllers.loginController.home);
  router.get('/admin',Auth.isLogged, controllers.loginController.admin);
  router.get('/encuestas_registradas',Auth.isLogged, controllers.homeAdmnController.reportsA);
  router.get('/respuestas',Auth.isLogged , controllers.encuestaController.index);
  router.get('/registrar_resultados',Auth.isLogged, controllers.homeAdmnController.registrarR);
  router.get('/Crear_encuesta', Auth.isLogged, controllers.homeAdmnController.crearE);
  router.get('/Temas/lista', Auth.isLogged, controllers.temaController.list);

  //cerrar sesion
  router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
  
  return router;
}