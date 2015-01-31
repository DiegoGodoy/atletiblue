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
  

atletiblueApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).
  when('/historia', {
    templateUrl: 'views/historia.html',
    controller: 'HistoriaCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);