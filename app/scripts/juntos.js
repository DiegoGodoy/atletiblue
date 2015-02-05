//Descripción del módulo principal de la aplicación

var atletiblueApp = angular.module('atletiblueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

//Se configuran las rutas de las vistas y sus controladores
atletiblueApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider.
    when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).
    when('/historia', {
        templateUrl: 'views/historia.html',
        controller: 'PlantillaCtrl'
    }).
    when('/plantilla', {
        templateUrl: 'views/plantilla.html',
        controller: 'PlantillaCtrl'
    }).
    when('/noticias', {
        templateUrl: 'views/noticias.html',
        controller: 'NoticiasCtrl'
    }).
    when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl'
    }).
    when('/noticia1', {
        templateUrl: 'views/noticias/noticia1.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia2', {
        templateUrl: 'views/noticias/noticia2.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia3', {
        templateUrl: 'views/noticias/noticia3.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia4', {
        templateUrl: 'views/noticias/noticia4.html',
        controller: 'NoticiasCtrl'
    }).
    when('/noticia5', {
        templateUrl: 'views/noticias/noticia5.html',
        controller: 'NoticiasCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

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





















atletiblueApp.factory('Clasificacion', function ($resource) {
    
    //Variable que contiene la clasificación con todos los equipos alojada en la colección
      //'clasificación' de Mongolab en la ruta que indica $resource
    var Clasificacion =
        $resource('https://api.mongolab.com/api/1/databases/atletiblue/collections/clasificacion/', {
        apiKey: 'ljDhb1Qm1DfhZGmKr8bZHlSzSbseJQA6', //Key de Mongolab
        id: 'franmacias91' //User de Mongobal
    });
    
    return Clasificacion;
});

//Controlador que se encargará de gestionar main.html y la parte fija de la web, alojada en index.html

atletiblueApp.controller('MainCtrl', function ($scope,Clasificacion) {

      'use strict';

      

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
    $scope.clasificacion = Clasificacion.query({},function (clasificacion) {
        console.log($scope.clasificacion.length);
    });

});


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

atletiblueApp.controller('PlantillaCtrl', ['$scope','$http', function($scope, $http){    
	
	//Cargar plantilla de jugadores desde fichero JSON
	$http.get('../../../json/plantilla.json').success (function(data){
		$scope.jugadores= data;
	});

}]);



