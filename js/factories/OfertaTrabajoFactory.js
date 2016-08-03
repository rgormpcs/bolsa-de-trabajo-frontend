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
        getOfertaTrabajoPorEmpleador: {
            url: 'http://localhost:1337/Empleador/getOfertaTrabajoPorEmpleador',
            method: 'GET',
            params: {
                idOfertaTrabajo: '@idOfertaTrabajo'
            }
        }
    });
    return factory;
}]);
