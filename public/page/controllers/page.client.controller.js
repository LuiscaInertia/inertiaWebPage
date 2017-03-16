angular.module('page').controller('PageController', ['$scope', '$window', '$timeout', '$location', 'Authentication',
  function($scope, $window, $timeout, $location, Authentication) {
    $scope.authentication = Authentication;

    $scope.inertia = {
		"name": "INERTIA SAS",
		"slogan": "Computer Intelligence, Technology and Innovation",
		"shortAboutUs": "Generando nuevas tecnologías e innovando a partir de los nuevos conocimientos que nos trae el mundo.",
		"phone": "(+57) 316 377 2739",
		"email": "info@inertiasas.com",
		"address": "Carrera 9 # 47 - 52, Bogotá. Colombia."
	};

    $scope.features = 
    [
    {"feature": "Acceso por medio de Dispositivos Móviles", "description": "Descripción de la característica.", "imgSrc": "img/features/feature-1.png", "bonus": "Cause mobile matters", "bonusDescription": "<p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.</p><p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. </p>"},
    {"feature": "Soporte 24/7", "description": "Descripción de la característica.", "imgSrc": "img/features/feature-2.png", "bonus": "When you need it most", "bonusDescription": "<p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.</p><p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. </p>"},
    {"feature": "Free Upgrade Assistance", "description": "Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.", "imgSrc": "img/features/feature-3.png", "bonus": "FREE upgrades for life!", "bonusDescription": "<p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.</p><p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. </p>"},
    {"feature": "99.9% Uptime", "description": "Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.", "imgSrc": "img/features/feature-4.png", "bonus": "Rhoncus adipiscing", "bonusDescription": "<p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. Dictumst, odio! Elementum tortor sociis in eu dis dictumst pulvinar lorem nec aliquam a nascetur.</p><p>Rhoncus adipiscing, magna integer cursus augue eros lacus porttitor magna. </p>"}
    ];

    $scope.clientsComments = 
    [
    {"client": "Jimi", "infoBlog": "@mrjimi", "hrefBlog": "#!/", "comment": "It's totally awesome, we're could imagine life without it!", "imgSrc": "img/team/jimi.jpg"},
    {"client": "Steve", "infoBlog": "Founder of Apple", "hrefBlog": "#!/", "comment": "10 out of 10, highly recommended!", "imgSrc": "img/team/jobs.jpg"},
    {"client": "Adele", "infoBlog": "@iamadele", "hrefBlog": "#!/", "comment": "Our productivity & sales are up! Couldn't be happier with this product!", "imgSrc": "img/team/adele.jpg"}

    ];

  }
]);