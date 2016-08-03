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
                idEmpleador:$cookies.get('empleadorId')
            },
            $scope.empleador).$promise.then(
            function success(respuesta) {
                console.log("empleador actualizado", respuesta);
                $scope.empleador = respuesta;
            },
            function error(error) {
                console.log(error);
            });
        EmpleadorFactory.save($scope.empleador).$promise.then(function success(respuesta) {
                console.log('éxito en ingreso de solicitud', respuesta);
                $scope.empleador = {};
            },
            function error(error) {
                console.log('Error en ingreso de solicitud', error);
            });
    }
}]);
