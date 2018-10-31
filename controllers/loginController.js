const dbConnection = require('../config/BDConnection');
var passport = require('passport')

const index = (req, res) => {
	res.render('login',{
		'msj' : req.flash('message')
	});
}

const home = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
      	res.render('home',{
			'usuario'  : req.user.nombre,
			'encuestas': result
		});
	});
	
}

const admin = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
      	res.render('homeAdmn',{
			'usuario'  : req.user.nombre,
			'encuestas': result
		});
	});
	
}

module.exports = {
	index,
	home,
	admin
}