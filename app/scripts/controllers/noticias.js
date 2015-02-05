atletiblueApp.controller('NoticiasCtrl', ['$scope','$resource', function ($scope,$resource) {

      'use strict';

    var Noticias =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/noticias/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });

    $scope.noticiasMostradas=3;
    $scope.noticias = Noticias.query({});
    $scope.ultimaNoticia=function(noticias){
          //return noticias[0].Ruta;
          location.href=noticias[0].Ruta;
    }

}]);
