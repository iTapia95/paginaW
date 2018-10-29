const dbConnection = require('../config/BDConnection');
var usuario ='';

const lista = (req, res)=>{
	const connection = dbConnection();
	connection.query('select nombre from encuesta', (err, result) => {

	});
}

const reportsA = (req, res) => {
  	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
      	res.render('ERAdmn',{
			'usuario'  : usuario
		});
	});
}

const regisR = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
		res.render('registrarR', {
			'usuario' : usuario
		});
	});
}

module.exports = {
	reportsA,
	regisR
}