atletiblueApp.controller('MainCtrl', ['$scope', function ($scope) {
    
      'use strict';
      //JSON en código para cargar la barra de navegación y sus rutas
      $scope.menu = [{ruta: '#', nombre: 'inicio'},
                     {ruta: '#historia', nombre: 'historia'},
                     {ruta: '#plantilla', nombre: 'plantilla'},
                     {ruta: '#noticias', nombre: 'noticias'},
                     {ruta: '#competicion', nombre: 'competición'}];
}]);
