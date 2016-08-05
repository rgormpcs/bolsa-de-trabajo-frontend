app.factory('PostulanteFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Postulante/:idUsuario', {
        idUsuario: '@idUsuario'
    }, {
        loginPostulante: {
            url: 'http://localhost:1337/Postulante/loginPostulante',
            method: 'POST'
        },
        getPostulante: {
            url: 'http://localhost:1337/Postulante/getPostulante',
            method: 'GET',
            params: {
                idPostulante: '@idPostulante'
            }
        },
        updatePostulante: {
            url: 'http://localhost:1337/Postulante/updatePostulante',
            method: 'PUT',
            params: {
                idPostulante: '@idPostulante'
            }
        }
    });
    return factory;
}]);
