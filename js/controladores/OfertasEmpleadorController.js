app.controller('OfertasEmpleadorCtrl', ['$scope', '$state', '$cookies', 'OfertaTrabajoFactory', function($scope, $state, $cookies, OfertaTrabajoFactory) {
    $scope.facultades = [{
        clave: 'ciencias',
        nombre: 'Facultad de Ciencias'
    }, {
        clave: 'administrativas',
        nombre: 'Facultad de Ciencias Administrativas'
    }, {
        clave: 'civil-ambiental',
        nombre: 'Facultad de Ingeniería Civil y Ambiental'
    }, {
        clave: 'electrica-electronica',
        nombre: 'Facultad de Ingeniería Elétrica y Eléctronica'
    }, {
        clave: 'geologia-petroleos',
        nombre: 'Facultad de Ingeniería Geología y Petroleos'
    }, {
        clave: 'mecanica',
        nombre: 'Facultad de Ingeniría Mecánica'
    }, {
        clave: 'sistemas',
        nombre: 'Facultad de Ingeniería de Sistemas'
    }, {
        clave: 'quimica-agro',
        nombre: 'Facultad de Ingeniería Química y Agroindustría'
    }, {
        clave: 'esfot',
        nombre: 'ESFOT'
    }, {
        clave: 'prepo',
        nombre: 'Formación Básica'
    }];

    // $scope.ofertas = [];

    OfertaTrabajoFactory.
}]);
