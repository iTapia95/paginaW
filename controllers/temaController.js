const dbConnection = require('../config/BDConnection');

const list = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from tema where nombre like ' + '"%' + req.query.search + '%"', (err, result) => {
		res.send(result);
	});
}

module.exports = {
	list
}