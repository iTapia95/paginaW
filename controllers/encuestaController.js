const dbConnection = require('../config/BDConnection');

const index = (req, res) => {
	res.render('Respuestas');
}
const read = (req, res) => {
	res.render('para el push');
}
module.exports = {
	index
}