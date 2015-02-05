describe("Controller Test", function () {
	// Arrange
	var mockScope = {};
	var controller;
	afterEach(angular.module("atletiblueApp")); //El módulo que vamos a utilizar
	//Resolvemos ahora las dependencias
	afterEach(angular.mock.inject(function ($controller, $rootScope) {
		mockScope = $rootScope.$new();
		controller = $controller("NoticiasCtrl", {
		$scope: mockScope
		});
	}));

	// test

	it("Ruta de la ultima noticia", function () {
		mockScope.ultimaNoticia();
		expect(location.href).toEqual('#noticia5');
	});
});

