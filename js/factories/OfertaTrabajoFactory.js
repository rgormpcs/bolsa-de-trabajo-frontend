app.factory('OfertaTrabajoFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/ofertaTrabajo/:idEmpleador', {
        idEmpleador: '@idEmpleador'
    }, {
        registrarNuevaOfertaBE: {
            url: 'http://localhost:1337/ofertaTrabajo',
            method: 'POST',
            data: $scope.ofertaTrabajo
        }
    });
    return factory;
}]);
