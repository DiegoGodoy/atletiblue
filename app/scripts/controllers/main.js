atletiblueApp.controller('MainCtrl', ['$scope','$resource', function ($scope,$resource) {

      'use strict';

    var Clasificacion =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/clasificacion/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });

      //JSON en código para cargar la barra de navegación y sus rutas
    $scope.menu = [{ruta: '#', nombre: 'inicio'},
                   {ruta: '#historia', nombre: 'historia'},
                   {ruta: '#plantilla', nombre: 'plantilla'},
                   {ruta: '#noticias', nombre: 'noticias'},
                   {ruta: '#competicion', nombre: 'competición'},
                   {ruta: '#contacto', nombre: 'contacto'}];

    $scope.clasificacion = Clasificacion.query({});
    //$scope.clasificacion.sort(function(a,b) { return a.PT - b.PT } );


    $scope.encabezado=['Equipo', 'PT', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GC', 'DG'];

}]);
