var app = angular.module('trabajoepn', ['ui.router', 'ngResource', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "vistas/inicio.html",
            // controller
            data: {
                credencial: false
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "vistas/login.html",
            controller: 'LoginCtrl',
            data: {
                credencial: false
            }
        })
        .state('registro', {
            url: "/registro-de-empleador",
            templateUrl: "vistas/empleador/registro-de-empleador.html",
            controller: 'RegistroDeEmpleadorCtrl',
            data: {
                credencial: false
            }
        })
        .state('registroP', {
            url: "/registro-de-postulante",
            templateUrl: "vistas/postulante/registro-de-postulante.html",
            controller: 'RegistroDePostulanteCtrl',
            data: {
                credencial: false
            }
        })
        .state('registro-de-oferta', {
            url: "/registro-de-oferta",
            templateUrl: "vistas/empleador/registro-de-oferta.html",
            controller: 'RegistroDeOfertaCtrl',
            data: {
                credencial: true
            }
        })
        .state('ofertas-empleador', {
            url: "/ofertas-empleador",
            templateUrl: "vistas/empleador/ofertas-empleador.html",
            controller: 'OfertasEmpleadorCtrl',
            data: {
                credencial: true
            }
        })
        .state('editar-oferta-empleador', {
            url: "/editar-oferta-empleador",
            templateUrl: "vistas/empleador/editar-oferta-empleador.html",
            controller: 'EditarOfertaCtrl',
            data: {
                credencial: true
            }
        })
        .state('editar-perfil-empleador', {
            url: "/editar-perfil-empleador",
            templateUrl: "vistas/empleador/editar-perfil-empleador.html",
            controller: 'EditarPerfilEmpleadorCtrl',
            data: {
                credencial: true
            }
        })
        .state('ver-postulantes-de-oferta', {
            url: "/ver-postulantes-de-oferta/:idOferta",
            templateUrl: "vistas/empleador/ver-postulantes-de-oferta.html",
            controller: 'VerPostulantesDeOfertaCtrl',
            data: {
                credencial: true
            }
        })
        .state('postulaciones-postulante', {
            url: "/postulaciones-postulante",
            templateUrl: "vistas/postulante/postulaciones-postulante.html",
            controller: 'PostulacionesPostulanteCtrl',
            data: {
                credencial: true
            }
        })
        .state('postulaciones-realizadas', {
            url: "/postulaciones-realizadas",
            templateUrl: "vistas/postulante/postulaciones-realizadas.html",
            controller: 'PostulacionesRealizadasCtrl',
            data: {
                credencial: true
            }
        })
        .state('editar-perfil-postulante', {
            url: "/editar-perfil-postulante",
            templateUrl: "vistas/postulante/editar-perfil-postulante.html",
            controller: 'EditarPerfilPostulanteCtrl',
            data: {
                credencial: true
            }
        })
        .state('ver-oferta', {
            url: "/ver-oferta/:idOferta",
            templateUrl: "vistas/postulante/ver-oferta.html",
            controller: 'VerOfertaCtrl',
            data: {
                credencial: true
            }
        });

    $urlRouterProvider.otherwise("/registro-de-empleador");
});

//permite verificar si la pagina a la que se quiere acceder
//requiere una credencial
app.run(function($rootScope, $cookies, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var credencial = toState.data.credencial;
        if (credencial) {
            if ($cookies.get('empleadorId')) {
                console.log('éxito en ingreso');
            } else if ($cookies.get('postulanteId')) {
                console.log('éxito en ingreso');
            } else {
                console.log('error en ingreso');
                event.preventDefault();
                return $state.go('login')
            }

        }
    });
});
