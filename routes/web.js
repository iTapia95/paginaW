const express = require('express');
const loginController = require('../controllers/login-controller');
const inicioController = require('../controllers/encuesta-controller');
const homeAdmnController = require('../controllers/homeAdmn-controller');
const router = express.Router();
var passport = require ('passport');


router.get('/',function(req, res) {
  res.redirect('/login');
});
router.get('/login', loginController.index);
router.post('/login', loginController.validate);
router.get('/home',loginController.home);
router.get('/admin', loginController.admin);
router.get('/encuestas_registradas', homeAdmnController.reportsA);
router.get('/respuestas', inicioController.index);
router.get('/registrar_resultados', homeAdmnController.regisR);

router.post('/auth/signin', passport.authenticate('local',{
successRedirect: '/home',
failureRedirect:'/login',
failureFlash: true
}));

module.exports = router;