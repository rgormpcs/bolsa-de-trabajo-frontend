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
                url: 'http://localhost:1337/ofertaTrabajo?idEmpleador=:idEmpleador',
                method: 'GET',
                params: {
                    idEmpleador: '@idEmpleador'
                },
                    isArray: true
    },
    updateOferta: {
        url: 'http://localhost:1337/Empleador/updateOferta',
        method: 'PUT',
        params: {
            idOfertaTrabajo: '@idOfertaTrabajo'
        }
    }
});
return factory;
}]);
