app.controller('VerOfertaCtrl', ['$scope', '$rootScope', 'OfertaTrabajoFactory', '$stateParams', 'PostulacionFactory', '$cookies',

    function($scope, $rootScope, OfertaTrabajoFactory, $stateParams, PostulacionFactory, $cookies) {
        OfertaTrabajoFactory.get({
            id: $stateParams.idOferta
        }).$promise.then(
            function success(respuesta) {
                console.log("oferta", respuesta);
                $scope.oferta = respuesta;
            },
            function error(error) {
                console.log(error);
            });

        $scope.existePostulacion = function() {
            //  console.log("HAY POSTULACION es",$scope.hayPostulacion)
            OfertaTrabajoFactory.getPostulacion({
                idPostulante: $cookies.get('postulanteId'),
                idOfertaTrabajo: $stateParams.idOferta
            }).$promise.then(
                function success(respuesta) {
                    if (respuesta.length >= 1) {
                        //$scope.hayPostulacion = true;
                        alert("Usted ya ha postulado para esta oferta");
                    } else {
                        //$scope.hayPostulacion = false;
                        PostulacionFactory.save({
                            idPostulante: $cookies.get('postulanteId'),
                            idOfertaTrabajo: $stateParams.idOferta
                        }).$promise.then(
                            function success(respuesta) {
                                console.log("postulacion ok", respuesta);
                                alert("Su postulación ha sido registrada exitosamente")
                                location.href = "#/postulaciones-realizadas";
                            },
                            function error(error) {
                                console.log(error);
                            });
                    }
                },
                function error(error) {
                    console.log(error);
                });
            return $rootScope.existe = $scope.hayPostulacion;
        }
    }
]);
/*  $scope.postular = function() {
              $scope.existePostulacion($stateParams.idOferta);
                if ( $rootScope.existe== false) {
                    //  if ($scope.existe == false) {
                    PostulacionFactory.save({
                        idPostulante: $cookies.get('postulanteId'),
                        idOfertaTrabajo: $stateParams.idOferta
                    }).$promise.then(
                        function success(respuesta) {
                            console.log("postulacion ok", respuesta);
                            alert("Se Postulo Correctamente")
                            location.href = "#/postulaciones-realizadas";
                        },
                        function error(error) {
                            console.log(error);
                        });
                } else {
                    alert("no se puede postular");
                }
                console.log("IMPRESION DE VARIABLE EXISTE", $scope.hayPostulacion)
            }
    }*/
