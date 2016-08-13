app.controller('LoginCtrl', ['$scope', '$state', '$cookies', 'EmpleadorFactory', 'PostulanteFactory', function($scope, $state, $cookies, EmpleadorFactory, PostulanteFactory) {
    $scope.usuarioLogin = {};

    $scope.login = function() {
        EmpleadorFactory.login($scope.usuarioLogin).$promise.then(
            function success(respuesta) {
                console.log('exito en login desde sails');
                $cookies.put('empleadorId', respuesta.id);
                $state.go('ofertas-empleador');
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
                alert("Contraseña incorrecta!");
            });
    },
    $scope.loginPostulante = function() {
        console.log('entro a controller Login postulante');
        PostulanteFactory.loginPostulante($scope.usuarioLogin).$promise.then(
            function success(respuesta) {
                console.log('exito en login desde sails');
                $cookies.put('postulanteId', respuesta.id);
                $state.go('postulaciones-postulante');
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
                alert("Contraseña incorrecta!");
            });
    }
}]);



function mostrarReferenciaPostulante() {

    if (document.fcontacto.email.value.length==0){
      	alert("Tiene que escribir su Correo Electrónico")
      	document.fcontacto.email.focus()
      	return 0;
   	}

    if (document.fcontacto.password.value.length==0){
        alert("Tiene que escribir su Contraseña")
        document.fcontacto.password.focus()
        return 0;
    }
    if (document.fcontacto.Conocido[0].checked == true) {
      document.getElementById('empleador').style.display = 'none';
        document.getElementById('postulante').style.display = 'block';
    }
}

function mostrarReferenciaEmpleador() {

    if (document.fcontacto.email.value.length==0){
      	alert("Tiene que escribir su Correo Electrónico")
      	document.fcontacto.email.focus()
      	return 0;
   	}

    if (document.fcontacto.password.value.length==0){
        alert("Tiene que escribir su Contraseña")
        document.fcontacto.password.focus()
        return 0;
    }
    if (document.fcontacto.Conocido[1].checked == true) {
        document.getElementById('postulante').style.display = 'none';
        document.getElementById('empleador').style.display = 'block';
    }
}
