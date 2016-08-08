app.controller('EditarPerfilPostulanteCtrl', ['$scope', 'PostulanteFactory', '$cookies', function($scope, PostulanteFactory, $cookies) {
    // $scope.empleador = {};

    PostulanteFactory.getPostulante({
        idPostulante: $cookies.get('postulanteId')
    }).$promise.then(
        function success(respuesta) {
            console.log("postulante", respuesta);
            $scope.postulante = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.editarPostulante = function() {
        console.log('postulante', $scope.postulante);
        PostulanteFactory.updatePostulante({
            idPostulante: $cookies.get('postulanteId')
        }, {
            cedulaPostulante: $scope.postulante.cedulaPostulante,
            nombrePostulante: $scope.postulante.nombrePostulante,
            apellidoPostulante: $scope.postulante.apellidoPostulante,
            telefonoPostulante: $scope.postulante.telefonoPostulante,
            celularPostulante: $scope.postulante.celularPostulante,
            emailPostulante: $scope.postulante.emailPostulante,
            nacionalidadPostulante: $scope.postulante.nacionalidadPostulante,
            estadoCivilPostulante: $scope.postulante.estadoCivilPostulante,
            generoPostulante: $scope.postulante.generoPostulante,
            fechaNacimientoPostulante: $scope.postulante.fechaNacimientoPostulante,
            descripcionPerfilPostulante: $scope.postulante.descripcionPerfilPostulante,
            cvPostulante: $scope.postulante.cvPostulante,
            contraseniaPostulante: $scope.postulante.contraseniaPostulante,
        }).$promise.then(
            function success(respuesta) {
                console.log("postulante actualizado", respuesta);
                $scope.postulante = respuesta;
                alert("Se Actualizo Correctamente")
            },
            function error(error) {
                console.log(error);
            });
    }
}]);
