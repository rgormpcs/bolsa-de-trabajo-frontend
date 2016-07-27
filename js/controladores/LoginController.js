app.controller('LoginCtrl', ['$scope', '$state', '$cookies', 'EmpleadorFactory', function($scope, $state, $cookies, EmpleadorFactory) {
    $scope.usuarioLogin = {};

    $scope.login = function() {
        EmpleadorFactory.login($scope.usuarioLogin).$promise.then(
            function success(respuesta) {
                console.log('exito en login desde sails');
                $cookies.put('empleadorId', respuesta.id);
                $state.go('perfil-empleador');
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
            });
    }
}]);
