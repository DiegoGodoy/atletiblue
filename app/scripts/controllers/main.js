'use strict';

/**
 * @ngdoc function
 * @name atletiblueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atletiblueApp
 */
var mainController = angular.module('atletiblueApp', [])

var prueba = {"Nombre": "Juan Manuel Sanchez Garcia-Rowe","Edad": 28,"Numero": 1,"Posicion": "Portero","Partidos jugados": "","Goles": ""};


mainController.controller('MainCtrl', ['$scope', '$http', '$location', '$anchorScroll', function ($scope, $http, $location, $anchorScroll)

  {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.linea = prueba;
    
  }]);
