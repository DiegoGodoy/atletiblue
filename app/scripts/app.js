'use strict';

/**
 * @ngdoc overview
 * @name atletiblueApp
 * @description
 * # atletiblueApp
 *
 * Main module of the application.
 */
var atletiblueApp = angular.module('atletiblueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  
/*mainApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
atletiblueApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);