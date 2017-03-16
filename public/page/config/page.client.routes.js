angular.module('page').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'page/views/home.client.view.html'
    }).
    when('/features', {
      templateUrl: 'page/views/features.client.view.html'
    }).
    when('/pricing', {
      templateUrl: 'page/views/pricing.client.view.html'
    }).
    when('/pricing-tables', {
      templateUrl: 'page/views/pricing-tables.client.view.html'
    }).
    when('/projects', {
      templateUrl: 'page/views/projects.client.view.html'
    }).
    when('/products', {
      templateUrl: 'page/views/products.client.view.html'
    }).
    when('/services', {
      templateUrl: 'page/views/services.client.view.html'
    }).
    when('/consultancy', {
      templateUrl: 'page/views/consultancy.client.view.html'
    }).
    when('/collaborators', {
      templateUrl: 'page/views/collaborators.client.view.html'
    }).
    when('/about', {
      templateUrl: 'page/views/about.client.view.html'
    }).
    when('/contact', {
      templateUrl: 'page/views/contact.client.view.html'
    }).
    when('/blog', {
      templateUrl: 'page/views/blog-1.client.view.html'
    }).
    when('/blog/:a', {
       templateUrl: function(urlattr){
                 return 'page/views/blog-' + urlattr.a + '.client.view.html';
             }
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);