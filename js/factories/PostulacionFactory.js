app.factory('PostulacionFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Postulacion/:idPostulacion', {
        idPostulacion: '@idPostulacion'
    });
    return factory;
}]);
