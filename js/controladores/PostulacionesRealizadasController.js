app.controller('PostulacionesRealizadasCtrl', ['$scope', 'OfertaTrabajoFactory', 'PostulanteFactory', '$cookies',
    function($scope, PostulanteFactory, $cookies, OfertaTrabajoFactory) {
        console.log('en PostulacionesRealizadasCtrl');
        $scope.ofertas = [];
        PostulanteFactory.get({
            id: $cookies.get('postulanteId')
        }).
        $promise.then(function success(respuesta) {
                console.log('postulante', respuesta);
                //$scope.postulaciones = respuesta.postulaciones;
                for (var i = 0; i < respuesta.postulaciones.length; i++) {
                    OfertaTrabajoFactory.get({
                        id: respuesta.postulaciones[i].idOfertaTrabajo
                    }).$promise.then(function success(respuesta) {
                            console.log('éxito en obtener oferta de trabajo', respuesta);
                            $scope.ofertas.push(respuesta);
                        },
                        function error(error) {
                            console.log('Error', error);
                        });


                }
            },
            function error(error) {
                console.log('error', error);
            });
    }
]);
