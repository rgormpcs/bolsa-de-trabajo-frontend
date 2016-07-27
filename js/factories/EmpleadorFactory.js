app.factory('EmpleadorFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Empleador/:idUsuario', {
        idUsuario: '@idUsuario'
    }, {
        login: {
            url: 'http://localhost:1337/Empleador/login',
            method: 'POST'
        }
    });
    return factory;
}]);
