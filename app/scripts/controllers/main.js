'use strict';

/**
 * @ngdoc function
 * @name atletiblueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atletiblueApp
 */
//var mainController = angular.module('mainController', []);

//var prueba = {"Nombre": "Juan Manuel Sanchez Garcia-Rowe","Edad": 28,"Numero": 1,"Posicion": "Portero","Partidos jugados": "","Goles": ""};


//mainController.controller("MainCtrl", ['$scope', '$http', '$location', '$anchorScroll', function ($scope, $http, $location, $anchorScroll)
atletiblueApp.controller("MainCtrl", ['$scope', '$http', function ($scope, $http)
  {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
  }]);
