atletiblueApp.controller('ContactoCtrl', ['$scope','$resource', function ($scope,$resource) {

    'use strict';

    var Peticiones =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/peticiones/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6', //Key de Mongolab
            id: 'franmacias91'                               //User de Mongobal
        });
    $scope.master = {};
    
    $scope.peticiones = Peticiones.query({});

    $scope.update = function (user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
    
    $scope.add = function (user) {
        var peticion = new Peticiones({
            name: ""+user.nombre+" "+user.apellido+"",
            telefono: ""+user.telefono+"",
            email: ""+user.email+"",
            comentario:""+user.comentario+""
        });
        peticion.$save();
    };
}]);

