app.controller('EditarPerfilEmpleadorCtrl', ['$scope', 'EmpleadorFactory', '$cookies', function($scope, EmpleadorFactory, $cookies) {
    // $scope.empleador = {};

    EmpleadorFactory.getEmpleador({
        idEmpleador: $cookies.get('empleadorId')
    }).$promise.then(
        function success(respuesta) {
            console.log("empleador", respuesta);
            $scope.empleador = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.editarEmpleador = function() {
        console.log('empleador', $scope.empleador);
        EmpleadorFactory.updateEmpleador({
            idEmpleador: $cookies.get('empleadorId')
        }, {
            cedulaEmpleador: $scope.empleador.cedulaEmpleador,
            nombreEmpleador: $scope.empleador.nombreEmpleador,
            apellidoEmpleador: $scope.empleador.apellidoEmpleador,
            telefonoEmpleador: $scope.empleador.telefonoEmpleador,
            correoEmpleador: $scope.empleador.correoEmpleador,
            nombreEmpresaEmpleador: $scope.empleador.nombreEmpresaEmpleador,
            contraseniaEmpleador: $scope.empleador.contraseniaEmpleador,
        }).$promise.then(
            function success(respuesta) {
                console.log("empleador actualizado", respuesta);
                $scope.empleador = respuesta;
                alert("Se Actualizo Correctamente")
            },
            function error(error) {
                console.log(error);
            });
    }
}]);
