//Controlador que se encargará de gestionar main.html y la parte fija de la web, alojada en index.html

atletiblueApp.controller('MainCtrl', ['$scope','$resource', function ($scope,$resource) {

      'use strict';

      //Variable que contiene la clasificación con todos los equipos alojada en la colección
      //'clasificación' de Mongolab en la ruta que indica $resource
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
                   {ruta: '#contacto', nombre: 'contacto'}];
    
    //Encabezado de la tabla clasificatoria               
    $scope.encabezado=['Equipo', 'PT', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GC', 'DG'];  
      
    //Se consulta la variable donde se han cargado todos los equipos de la clasificación 
    //y se introducen en una variable en memoria
    $scope.clasificacion = Clasificacion.query({});
    

}]);
