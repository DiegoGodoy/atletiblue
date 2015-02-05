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
    when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl'
    }).
    when('/noticia1', {
        templateUrl: 'views/noticias/noticia1.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia2', {
        templateUrl: 'views/noticias/noticia2.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia3', {
        templateUrl: 'views/noticias/noticia3.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia4', {
        templateUrl: 'views/noticias/noticia4.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia5', {
        templateUrl: 'views/noticias/noticia5.html',
        controller: 'NoticiasCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
