app.controller('RegistroDeOfertaCtrl', ['$scope', 'OfertaTrabajoFactory', function($scope, OfertaTrabajoFactory) {
    $scope.ofertaTrabajo = {};
    $scope.registrarNuevaOferta = function() {
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
