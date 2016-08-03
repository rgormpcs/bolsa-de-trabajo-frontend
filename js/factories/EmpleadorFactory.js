app.factory('EmpleadorFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Empleador/:idUsuario', {
        idUsuario: '@idUsuario'
    }, {
        login: {
            url: 'http://localhost:1337/Empleador/login',
            method: 'POST'
        },
        getEmpleador: {
            url: 'http://localhost:1337/Empleador/getEmpleador',
            method: 'GET',
            params: {
                idEmpleador: '@idEmpleador'
            }
        },
        updateEmpleador: {
            method: 'PUT',
            params: {
                idEmpleador: '@idEmpleador'
            }

        }
    });
    return factory;

}]);
