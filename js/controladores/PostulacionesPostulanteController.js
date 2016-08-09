app.controller('PostulacionesPostulanteCtrl', ['$scope','$cookies', 'OfertaTrabajoFactory', 'PostulanteFactory',
    function($scope, $cookies, OfertaTrabajoFactory, PostulanteFactory) {
        OfertaTrabajoFactory.query().$promise.then(
            function success(respuesta) {
                console.log("ofertas", respuesta);
                $scope.ofertas = respuesta;

            },
            function error(error) {
                console.log(error);
            });

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
