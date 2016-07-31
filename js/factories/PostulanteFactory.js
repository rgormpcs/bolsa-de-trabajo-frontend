app.factory('postulanteFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Postulante/:idUsuario', {
        idUsuario: '@idUsuario'
    }, {
        login: {
            url: 'http://localhost:1337/Postulante/login',
            method: 'POST'
        }
    });
    return factory;
}]);
