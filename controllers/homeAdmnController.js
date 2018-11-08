const dbConnection = require('../config/BDConnection');


const lista = (req, res)=>{
	const connection = dbConnection();
	connection.query('select nombre from encuesta', (err, result) => {

	});
}

const reportsA = (req, res) => {
  	const connection = dbConnection();
		connection.query('select * from encuesta', (err, result) => {
      	res.render('ERAdmn',{
			'usuario'  : req.user.nombre
		});
	});
}

const registrarR = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
		res.render('registrarR', {
			'usuario' : req.user.nombre,
			'encuestas': result
		});
	});
}

const crearE = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
		res.render('crearE', {
			'usuario' : req.user.nombre,
			'encuestas': result
		});
	});
}

module.exports = {
	reportsA,
	registrarR,
	crearE
}