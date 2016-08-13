app.controller('EditarOfertaCtrl', ['$scope', '$stateParams', 'OfertaTrabajoFactory', 'EmpleadorFactory', '$cookies', function($scope, $stateParams, OfertaTrabajoFactory, EmpleadorFactory, $cookies) {
    $scope.laOferta = {};
    $scope.date = new Date();
    console.log("id empelador vaaaaaa???", $stateParams.idEmpleador);

    OfertaTrabajoFactory.getOfertaTrabajoPorEmpleador({
        //idEmpleador: $stateParams.idEmpleador
        idEmpleador: $cookies.get('empleadorId')
    }).$promise.then(
        function success(respuesta) {
            console.log("ofertaTrabajo", respuesta);
            $scope.ofertasTrabajo = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.editarOferta = function(oferta) {
        console.log('la ofertaTrabajo', oferta);
        OfertaTrabajoFactory.updateOferta({
            //idEmpleador: $cookies.get('empleadoId')
            idOfertaTrabajo: oferta.id
        }, {
            areaTrabajo: oferta.areaTrabajo,
            tipoDePuestoTrabajo: oferta.tipoDePuestoTrabajo,
            facultadTrabajo: oferta.facultadTrabajo,
            remuneracion: oferta.remuneracion,
            direccionTrabajo: oferta.direccionTrabajo,
            descripcionTrabajo: oferta.descripcionTrabajo,
            fechaInicioPublicacionTrabajo: oferta.fechaInicioPublicacionTrabajo,
            fechaFinPublicacionTrabajo: oferta.fechaFinPublicacionTrabajo,
        }).$promise.then(
            function success(respuesta) {
                console.log("oferta actualizado", respuesta);
                $scope.ofertaTrabajo = respuesta;
                alert("Se Actualizo Correctamente")
            },
            function error(error) {
                console.log(error);
            });
    }

}]);
