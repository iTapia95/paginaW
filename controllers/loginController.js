const index = (req, res) => {
	res.render('login',{
		'msj' : ''
	});
}

const validate = (req, res) =>{
	const connection = dbConnection();
	connection.query('select password,tipo from usuario where nombre = "' + req.body.uname +'"', (err, result) => {
      	if(result[0]===undefined){
      		res.render('login', {
				'msj' : 'Usuario o contraseña incorrecta'
			});
      	}else{
	      	if(req.body.psw == result[0].password){
	      		usuario=req.body.uname;
	      		if(result[0].tipo == 1)
		      		res.redirect('/home');
		      	else
		      		res.redirect('/admin');
	      	}
	      	else{
	      		res.render('login', {
					'msj' : 'Usuario o contraseña incorrecta'
				});
	      	}
        }
	});
}

const home = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
      	res.render('home',{
			'usuario'  : usuario,
			'encuestas': result
		});
	});
	
}

const admin = (req, res) => {
	const connection = dbConnection();
	connection.query('select * from encuesta', (err, result) => {
      	res.render('homeAdmn',{
			'usuario'  : usuario,
			'encuestas': result
		});
	});
	
}

module.exports = {
	index,
	validate,
	home,
	admin
}