/*angular.module('resource', ['ngResource'])
.factory('Clasificacion', function ($resource) {
    var Clasificacion =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/clasificacion/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });
})
.controller('ClasificacionCtrl', function ($scope, Clasificacion) {

    $scope.clasificacion = Clasificacion.query();

    $scope.encabezado=[{nombre:'Equipo', inverso:'-Equipo'},
                       {nombre:'PT', inverso:'-PT'},
                       {nombre:'PJ', inverso:'-PJ'},
                       {nombre:'PG', inverso:'-PG'},
                       {nombre:'PE', inverso:'-PE'},
                       {nombre:'PP', inverso:'-PP'},
                       {nombre:'GF', inverso:'-GF'},
                       {nombre:'GC', inverso:'-GC'},
                       {nombre:'DG', inverso:'-DG'}];
});*/
atletiblueApp.controller('MainCtrl', ['$scope', function ($scope) {
    
      'use strict';
      //JSON en código para cargar la barra de navegación y sus rutas
    $scope.menu = [{ruta: '#', nombre: 'inicio'},
                   {ruta: '#historia', nombre: 'historia'},
                   {ruta: '#plantilla', nombre: 'plantilla'},
                   {ruta: '#noticias', nombre: 'noticias'},
                   {ruta: '#competicion', nombre: 'competición'}];


    $scope.ordenarPor = function(orden){
                    $scope.ordenSeleccionado= orden;
                };

    $scope.handleEvent = function (e) {
        if(e.type === 'mouseover')
            $scope.data.fondoTabla= 'Blue';
        else
            $scope.data.fondoTabla='Beige';
    }

    //$scope.clasificacion = Clasificacion.query();

    $scope.encabezado=[{nombre: 'Equipo', inverso: '-Equipo'},
                       {nombre: 'PT', inverso: '-PT'},
                       {nombre: 'PJ', inverso: '-PJ'},
                       {nombre: 'PG', inverso: '-PG'},
                       {nombre: 'PE', inverso: '-PE'},
                       {nombre: 'PP', inverso: '-PP'},
                       {nombre: 'GF', inverso: '-GF'},
                       {nombre: 'GC', inverso: '-GC'},
                       {nombre: 'DG', inverso: '-DG'}];

}]);
