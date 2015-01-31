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
  

atletiblueApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider.
    when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).
    when('/historia', {
        templateUrl: 'views/historia.html',
        controller: 'HistoriaCtrl'
    }).
    when('/plantilla', {
        templateUrl: 'views/plantilla.html',
        controller: 'PlantillaCtrl'
    }).
    when('/noticias', {
        templateUrl: 'views/noticias.html',
        controller: 'NoticiasCtrl'
    }).
    when('/competicion', {
        templateUrl: 'views/competicion.html',
        controller: 'CompeticionCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
