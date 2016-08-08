app.controller('RegistroDeEmpleadorCtrl', ['$scope', 'EmpleadorFactory', function($scope, EmpleadorFactory) {
    $scope.empleador = {};
    $scope.registrarEmpleador = function() {
      console.log('empleador', $scope.empleador);
        EmpleadorFactory.save($scope.empleador).$promise.then(function success(respuesta) {
                console.log('éxito en ingreso de solicitud', respuesta);
                $scope.empleador = {};
                alert("Se Registro Correctamente")
                location.href = "#/login";
            },
            function error(error) {
                console.log('Error en ingreso de solicitud', error);
            });

    }
}]);
