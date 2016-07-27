app.factory('RegistroDeEmpleadorFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Empleador/:idUsuario', {
        idUsuario: '@idUsuario'
    });
    return factory;
}]);
