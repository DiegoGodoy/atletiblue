describe("Controller Test", function () {
	// Arrange
	var mockScope = {};
	var controller;
	beforeEach(angular.module("atletiblueApp")); //El módulo que vamos a utilizar
	//Resolvemos ahora las dependencias
	afterEach(angular.mock.inject(function ($controller, $rootScope) {
		mockScope = $rootScope.$new();
		controller = $controller("MainCtrl", {
		$scope: mockScope
		});
	}));

	// test

	it("equipos de la clasificacion", function () {
		expect(mockScope.clasificacion.length).toBe(13);
	});
});
