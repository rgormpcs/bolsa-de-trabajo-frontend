app.controller('PostulacionesRealizadasCtrl', ['$scope', '$state', 'PostulanteFactory', '$cookies', 'OfertaTrabajoFactory',
    function($scope, $state, PostulanteFactory, $cookies, OfertaTrabajoFactory) {
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

        $scope.getPostulacion = function(oferta) {
            OfertaTrabajoFactory.getPostulacion({
                idPostulante: $cookies.get('postulanteId'),
                idOfertaTrabajo: oferta.id
            }).$promise.then(
                function success(respuesta) {
                    //console.log("postulacion", respuesta);
                    console.log("postulacion", respuesta[0]);
                    $scope.postulacion = respuesta[0];
                    $scope.eliminarPostulacion($scope.postulacion);

                },
                function error(error) {
                    console.log(error);
                });
        }

        $scope.eliminarPostulacion = function(postulacion) {
            OfertaTrabajoFactory.deletePostulacion({
                idPostulacion: postulacion.id
            }).$promise.then(
                function success(respuesta) {
                    //console.log("postulacion", respuesta);
                    console.log("borrado");
                    $state.go($state.current, {}, {reload: true});
                },
                function error(error) {
                    console.log(error);
                });
        }

        PostulanteFactory.getPostulante({
            idPostulante: $cookies.get('postulanteId')
        }).$promise.then(
            function success(respuesta) {
                console.log("postulante", respuesta);
                $scope.postulante = respuesta;
            },
            function error(error) {
                console.log(error);
            });
    }
]);
