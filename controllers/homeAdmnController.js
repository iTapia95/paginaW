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
			'usuario'  : req.user
		});
	});
}

const regisR = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
		res.render('registrarR', {
			'usuario' : req.user
		});
	});
}

module.exports = {
	reportsA,
	regisR
}