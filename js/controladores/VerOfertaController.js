app.controller('VerOfertaCtrl', ['$scope', 'OfertaTrabajoFactory', '$stateParams', 'PostulanteFactory', '$cookies',

    function($scope, OfertaTrabajoFactory, $stateParams, PostulanteFactory, $cookies) {
        OfertaTrabajoFactory.get({
            id: $stateParams.idOferta
        }).$promise.then(
            function success(respuesta) {
                console.log("oferta", respuesta);
                $scope.oferta = respuesta;
            },
            function error(error) {
                console.log(error);
            });

        $scope.postular = function() {
            PostulanteFactory.save({
                idPostulante: $cookies.get('postulanteId'),
                idOfertaTrabajo: $stateParams.idOferta
            }).$promise.then(
                function success(respuesta) {
                    console.log("postulacion ok", respuesta);
                },
                function error(error) {
                    console.log(error);
                });
        }
    }
]);
