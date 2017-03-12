// Invocar modo JavaScript 'strict'
'use strict';

// Crear un nuevo método controller 'render'
exports.render = function(req, res) {
	// Usar el objeto 'response' para renderizar la view 'index' con un 'title' y propiedades 'userFullName'
	res.render('index', {
		title: 'INERTIA SAS',
		slogan: 'Computer Intelligence, Technology and Innovation',
		shortAboutUs: 'Generando nuevas tecnologías e innovando a partir de los nuevos conocimientos que nos trae el mundo.',
		phone: '(+57) 316 377 2739',
		email: 'info@inertiasas.com',
		address: 'Carrera 9 # 47 - 52, Bogotá. Colombia.',
		user: JSON.stringify(req.user)
	});
};
