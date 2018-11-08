const dbConnection = require('../config/BDConnection');

const index = (req, res) => {
	res.render('Respuestas');
}

module.exports = {
	index
}