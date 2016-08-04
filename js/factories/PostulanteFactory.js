app.factory('PostulanteFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Postulante/:idUsuario', {
        idUsuario: '@idUsuario'
    }, {
        loginPostulante: {
            url: 'http://localhost:1337/Postulante/loginPostulante',
            method: 'POST'
        }
    });
    return factory;
}]);
