atletiblueApp.controller('PlantillaCtrl', ['$scope','$http', function($scope, $http){    
	
	//Cargar plantilla desde fichero JSON
	$http.get('../../../json/plantilla.json').success (function(data){
		$scope.jugadores= data;
	});

}]);
