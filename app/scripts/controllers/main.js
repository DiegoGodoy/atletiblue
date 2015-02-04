atletiblueApp.controller('MainCtrl', ['$scope','$resource', function ($scope,$resource) {

      'use strict';

    var Clasificacion =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/clasificacion/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });
            
    var Admin =
            $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/administrador/', {
            apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6',
            id: 'franmacias91'
            });

      //JSON en código para cargar la barra de navegación y sus rutas
    $scope.menu = [{ruta: '#', nombre: 'inicio'},
                   {ruta: '#historia', nombre: 'historia'},
                   {ruta: '#plantilla', nombre: 'plantilla'},
                   {ruta: '#noticias', nombre: 'noticias'},
                   {ruta: '#contacto', nombre: 'contacto'}];
                   
    $scope.encabezado=['Equipo', 'PT', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GC', 'DG'];  

    $scope.clasificacion = Clasificacion.query({});
    /*$scope.administrador = Admin.query({}, function (administrador) {
        console.log(administrador.item.Usuario);
        });
    
    $scope.logueo = function (detalles) {
                    
        if(($scope.administrador.Usuario === detalles.Usuario) && ($scope.administrador.Contrasena === detalles.Contrasena))
             $scope.logueado=1;       
        else
            alert("Nombre de usuario o contraseña incorrectos.");
        
    }*/
    

}]);
