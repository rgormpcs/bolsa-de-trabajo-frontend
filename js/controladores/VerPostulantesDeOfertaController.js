app.controller('VerPostulantesDeOfertaCtrl', ['$scope', '$stateParams', 'OfertaTrabajoFactory', 'PostulanteFactory',

    function($scope, $stateParams, OfertaTrabajoFactory, PostulanteFactory) {
        console.log("idOferta", $stateParams.idOferta);

        OfertaTrabajoFactory.get({
            id: $stateParams.idOferta
        }).$promise.then(
            function success(respuesta) {
                console.log('oferta', respuesta);
                $scope.oferta = respuesta;
                $scope.postulantes = [];
                var postulaciones = $scope.oferta.postulaciones;
                console.log('postulaciones', postulaciones);
                for (var i = 0; i < postulaciones.length; i++) {
                    PostulanteFactory.get({
                        id: $scope.oferta.postulaciones[i].idPostulante
                    }).$promise.then(
                        function success(respuesta) {
                            console.log("postulante", respuesta);
                            $scope.postulantes.push(respuesta);
                        },
                        function error(error) {
                            console.log(error);
                        });
                }
            },
            function error(error) {
                console.log(error);
            });


    }
]);
