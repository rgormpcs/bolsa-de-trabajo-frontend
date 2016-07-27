var app = angular.module('trabajoepn', ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "vistas/inicio.html",
            // controller
        })
        .state('login', {
            url: "/login",
            templateUrl: "vistas/login.html",
            // controller: 'IngresoCtrl',
        })
        .state('registro', {
            url: "/registro-de-empleador",
            templateUrl: "vistas/registro-de-empleador.html",
            controller: 'RegistroDeEmpleadorCtrl'
        });
    $urlRouterProvider.otherwise("/registro-de-empleador");
});
