app.controller('PostulacionesRealizadasCtrl', ['$scope', 'PostulanteFactory', '$cookies',
    function($scope, PostulanteFactory, $cookies) {
        console.log('en PostulacionesRealizadasCtrl');
        PostulanteFactory.get({
            id: $cookies.get('postulanteId')
        }).
        $promise.then(function success(respuesta) {
                console.log('postulante', respuesta);
            },
            function error(error) {
                console.log('error', error);
            });
    }
]);
