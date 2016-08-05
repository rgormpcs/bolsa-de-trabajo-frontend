app.controller('RegistroDeOfertaCtrl', ['$scope', 'OfertaTrabajoFactory', '$cookies', function($scope, OfertaTrabajoFactory, $cookies) {
    $scope.ofertaTrabajo = {};
    $scope.registrarNuevaOferta = function() {
        $scope.ofertaTrabajo.idEmpleador = $cookies.get('empleadorId');
        console.log('Nueva Oferta', $scope.ofertaTrabajo);
        OfertaTrabajoFactory.save($scope.ofertaTrabajo).$promise.then(function success(respuesta) {
                console.log('éxito en ingreso de solicitud', respuesta);
                $scope.ofertaTrabajo = {};
            },
            function error(error) {
                console.log('Error en ingreso de solicitud', error);
            });
    }
}]);
