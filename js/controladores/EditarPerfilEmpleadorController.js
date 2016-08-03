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
            cedulaEmpleador: $scope.cedulaEmpleador,
            nombreEmpleador: $scope.nombreEmpleador,
            apellidoEmpleador: $scope.apellidoEmpleador,
            telefonoEmpleador: $scope.telefonoEmpleador,
            correoEmpleador: $scope.correoEmpleador,
            nombreEmpresaEmpleador: $scope.nombreEmpresaEmpleador,
            contraseniaEmpleador: $scope.contraseniaEmpleador,
        }).$promise.then(
            function success(respuesta) {
                console.log("empleador actualizado", respuesta);
                $scope.empleador = respuesta;
            },
            function error(error) {
                console.log(error);
            });
    }
}]);
