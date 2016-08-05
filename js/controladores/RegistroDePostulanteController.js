app.controller('RegistroDePostulanteCtrl', ['$scope','$state',  'PostulanteFactory', function($scope, PostulanteFactory) {
    $scope.postulante = {};
    $scope.registrarPostulante = function() {
      console.log('postulante', $scope.postulante);
        PostulanteFactory.save($scope.postulante).$promise.then(function success(respuesta) {
                console.log('éxito en ingreso de solicitud', respuesta);
                $scope.postulante = {};
                $state.go('login');
            },
            function error(error) {
                console.log('Error en ingreso de solicitud', error);
            });
    }
}]);
