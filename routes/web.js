const express = require('express');
const router = express.Router();
var passport = require ('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');



router.get('/',function(req, res) {
  res.redirect('/login');
});
router.get('/login', controllers.loginController.index);
//router.post('/login', loginController.validate);
router.get('/home',controllers.loginController.home);
router.get('/admin', controllers.loginController.admin);
router.get('/encuestas_registradas', controllers.homeAdmnController.reportsA);
//router.get('/respuestas', controllers.inicioController.index);
router.get('/registrar_resultados', controllers.homeAdmnController.regisR);

router.post('/login', passport.authenticate('local',{
  successRedirect: '/home',
  failureRedirect:'/',
  failureFlash: true
}));

module.exports = router;