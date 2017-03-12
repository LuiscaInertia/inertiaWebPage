angular.module('example').controller('ExampleController', ['$scope', '$window', '$timeout', '$location', 'Authentication',
  function($scope, $window, $timeout, $location, Authentication) {
    $scope.authentication = Authentication;


  }
]);