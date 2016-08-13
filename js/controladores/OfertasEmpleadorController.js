app.controller('OfertasEmpleadorCtrl', ['$scope', '$state', '$cookies', 'OfertaTrabajoFactory', function($scope, $state, $cookies, OfertaTrabajoFactory) {

    OfertaTrabajoFactory.getOfertaTrabajoPorEmpleador({
        idEmpleador: $cookies.get('empleadorId')
    }).$promise.then(
        function success(respuesta) {
            console.log("ofertas", respuesta);
            $scope.ofertas = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.getOfertasPorFacultad = function(facultad) {
        OfertaTrabajoFactory.getOfertaTrabajoPorFacultad({
            facultadTrabajo: facultad
        }).$promise.then(
            function success(respuesta) {
                console.log("OFERTAS", respuesta);
                $scope.ofertas = respuesta;
            },
            function error(error) {
                console.log(error);
            });
    }
}]);
