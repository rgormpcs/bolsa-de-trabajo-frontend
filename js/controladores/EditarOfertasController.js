app.controller('EditarOfertaCtrl', ['$scope', '$stateParams', 'OfertaTrabajoFactory', 'EmpleadorFactory', '$cookies', function($scope, $stateParams, OfertaTrabajoFactory, EmpleadorFactory, $cookies) {
    // $scope.empleador = {};
console.log("id empelador vaaaaaa???",$stateParams.idEmpleador);

    OfertaTrabajoFactory.getOfertaTrabajoPorEmpleador({
        //idEmpleador: $stateParams.idEmpleador
        idEmpleador: $cookies.get('empleadorId')
    }).$promise.then(
        function success(respuesta) {
            console.log("ofertaTrabajo", respuesta);
            $scope.ofertaTrabajo = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.editarOferta = function() {
        console.log('ofertaTrabajo', $scope.ofertaTrabajo);
        OfertaTrabajoFactory.updateOferta({
            idOfertaTrabajo: $cookies.get('OfertaTrabajoId')
        }, {
            areaTrabajo: $scope.ofertaTrabajo.areaTrabajo,
            tipoDePuestoTrabajo: $scope.ofertaTrabajo.tipoDePuestoTrabajo,
            facultadTrabajo: $scope.ofertaTrabajo.facultadTrabajo,
            remuneracion: $scope.ofertaTrabajo.remuneracion,
            direccionTrabajo: $scope.ofertaTrabajo.direccionTrabajo,
            descripcionTrabajo: $scope.ofertaTrabajo.descripcionTrabajo,
            fechaInicioPublicacionTrabajo: $scope.ofertaTrabajo.fechaInicioPublicacionTrabajo,
            fechaFinPublicacionTrabajo: $scope.ofertaTrabajo.fechaFinPublicacionTrabajo,

        }).$promise.then(
            function success(respuesta) {
                console.log("oferta actualizado", respuesta);
                $scope.ofertaTrabajo = respuesta;
                oferta.mostrar = !oferta.mostrar
            },
            function error(error) {
                console.log(error);
            });
    }


    $scope.botonCrearDeshabilitado = false;

}]);
