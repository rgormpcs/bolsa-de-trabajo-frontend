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
            templateUrl: "vistas/registro-de-empleador.html",
            controller: 'RegistroDeEmpleadorCtrl',
            data: {
                credencial: false
            }
        })
        .state('registro-de-oferta', {
            url: "/registro-de-oferta",
            templateUrl: "vistas/registro-de-oferta.html",
            // controller: 'OfertasEmpleadorCtrl',
            data: {
                credencial: true
            }
        })
        .state('ofertas-empleador', {
            url: "/ofertas-empleador",
            templateUrl: "vistas/ofertas-empleador.html",
            controller: 'OfertasEmpleadorCtrl',
            data: {
                credencial: true
            }
        })
        .state('perfil-empleador', {
            url: "/perfil-empleador",
            templateUrl: "vistas/perfil-empleador.html",
            // controller: 'RegistroDeEmpleadorCtrl',
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
            } else {
                console.log('error en ingreso');
                event.preventDefault();
                return $state.go('login')
            }
        }
    });
});
