var mainApplicationModuleName = 'inertia';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngSanitize','ngResource','ngRoute','users','page']);

mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});