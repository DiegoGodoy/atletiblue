'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('atletiblueApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  afterEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('deberia contar los 13 equipos de la clasificacion', function () {
    expect(scope.clasificacion.length).toBe(13);
  });
});
