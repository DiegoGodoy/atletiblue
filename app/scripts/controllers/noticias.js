
atletiblueApp.factory('Noticias', function ($resource) {
    var Noticias =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/noticias/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });
    
    return Noticias;
});
//Controlador que se encargará de gestionar noticias.html y cada noticia en cuestión

atletiblueApp.controller('NoticiasCtrl',function ($scope,Noticias) {

      'use strict';
    //Variable que contiene todas las noticias alojadas en la colección 'noticias' de Mongolab en la ruta que indica $resource
 

    //Variable en memoria para mostrar un número límite de noticias en la vista principal de la web
    //En este caso, se mostrarán siempre las tres últimas noticias de la web.
    $scope.noticiasMostradas=-3;
    
    //Se consulta la variable donde se han cargado todos las noticias 
    //y se introducen en una variable en memoria
    $scope.noticias = Noticias.query({},function (noticias) {
        console.log($scope.noticias.length);
    });
    //Función utilizada para acceder a la crónica del último partido.
    //Al ser las noticias crónicas de partidos, la última crónica coincidirá con 
    $scope.ultimaNoticia =function(){
          $scope.long=$scope.noticias.length-1;
          console.log($scope.noticias.length);
          console.log($scope.long);
          return location.href=$scope.noticias[$scope.long].Ruta;
    }
      
 
});
