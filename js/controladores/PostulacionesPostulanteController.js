app.controller('PostulacionesPostulanteCtrl', ['$scope', 'OfertaTrabajoFactory',
    function($scope, OfertaTrabajoFactory) {
        OfertaTrabajoFactory.query().$promise.then(
            function success(respuesta) {
                console.log("ofertas", respuesta);
                $scope.ofertas = respuesta;
            },
            function error(error) {
                console.log(error);
            });
    }
]);
