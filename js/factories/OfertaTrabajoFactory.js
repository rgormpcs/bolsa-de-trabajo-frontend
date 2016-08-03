app.factory('OfertaTrabajoFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/ofertaTrabajo/:idOfertaTrabajo', {
        idOfertaTrabajo: '@idOfertaTrabajo'
    }, {
        registrarNuevaOfertaBE: {
            url: 'http://localhost:1337/ofertaTrabajo',
            method: 'POST',
            params: {
                idEmpleador: '@idEmpleador'
            }
        },
        getOfertaTrabajo: {
            url: 'http://localhost:1337/Empleador/getOfertaTrabajo',
            method: 'GET',
            params: {
                idOfertaTrabajo: '@idOfertaTrabajo'
            }
        }
    });
    return factory;
}]);
