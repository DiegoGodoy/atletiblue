atletiblueApp.factory('Peticiones', function ($resource) {
    
    //Variable que contiene todas las peticiones alojadas en la colección 'peticiones' de Mongolab en la ruta que indica $resource
    var Peticiones =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/peticiones/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6', //Key de Mongolab
            id: 'franmacias91' //User de Mongobal
    });
    
    return Peticiones;
});

//Controlador que se encargará de gestionar contacto.html
atletiblueApp.controller('ContactoCtrl', function ($scope,Peticiones) {
    'use strict';
    
    //Se consulta la variable donde se han cargado todas las peticiones
    //y se introducen en una variable en memoria
    $scope.peticiones = Peticiones.query({},function (peticiones) {
        console.log($scope.peticiones.length);
    });
    
    //Función para resetear el formulario de contacto
    $scope.reset = function () {
        $scope.user = {};
    };
    $scope.reset();
    
    //Función para añadir la peticion del usuario a Mongolab
    $scope.add = function (user) {
        var peticion = new Peticiones({
        name: ""+user.nombre+" "+user.apellido+"",
        telefono: ""+user.telefono+"",
        email: ""+user.email+"",
        comentario:""+user.comentario+""
    });
    peticion.$save();
    location.href="#contacto";
    };
    
});




















