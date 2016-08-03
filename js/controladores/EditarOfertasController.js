app.controller('EditarOfertaCtrl', ['$scope', 'OfertaTrabajoFactory', '$cookies', function($scope, OfertaTrabajoFactory, $cookies) {
    // $scope.empleador = {};

OfertaTrabajoFactory.getOfertaTrabajo({
   idOfertaTrabajo: $cookies.get('ofertaId')
}).$promise.then(
    function success(respuesta) {
        console.log("ofertaTrabajo", respuesta);
        $scope.ofertaTrabajo = respuesta;
    },
    function error(error) {
        console.log(error);
    });

}]);
