app.factory('OfertaTrabajoFactory', ['$resource', '$rootScope', function($resource, $rootScope) {
    $rootScope.facultades = [{
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
        nombre: 'Facultad de Ingeniería Eléctrica y Electrónica'
    }, {
        clave: 'geologia-petroleos',
        nombre: 'Facultad de Ingeniería de Geología y Petróleos'
    }, {
        clave: 'mecanica',
        nombre: 'Facultad de Ingeniería Mecánica'
    }, {
        clave: 'sistemas',
        nombre: 'Facultad de Ingeniería en Sistemas'
    }, {
        clave: 'quimica-agro',
        nombre: 'Facultad de Ingeniería Química y Agroindustria'
    }, {
        clave: 'esfot',
        nombre: 'ESFOT'
    }, {
        clave: 'prepo',
        nombre: 'Formación Básica'
    }];


    var factory = $resource('http://localhost:1337/ofertaTrabajo/:idOfertaTrabajo', {
        idOfertaTrabajo: '@idOfertaTrabajo'
    }, {
        registrarNuevaOfertaBE: {
            url: 'http://localhost:1337/ofertaTrabajo',
            method: 'POST',
            params: {
                idEmpleador: '@idEmpleador'
            }
        },
        getOfertaTrabajoPorEmpleador: {
            url: 'http://localhost:1337/ofertaTrabajo?idEmpleador=:idEmpleador',
            method: 'GET',
            params: {
                idEmpleador: '@idEmpleador'
            },
            isArray: true
        },
        getOfertaTrabajoPorFacultad: {
            url: 'http://localhost:1337/ofertaTrabajo?facultadTrabajo=:facultadTrabajo',
            method: 'GET',
            params: {
                facultadTrabajo: '@facultadTrabajo'
            },
            isArray: true
        },
        getPostulacion: {
            //http://localhost:1337/postulacion?idPostulante=1&idOfertaTrabajo=1
            url: 'http://localhost:1337/postulacion?idPostulante=:idPostulante&idOfertaTrabajo=:idOfertaTrabajo',
            method: 'GET',
            params: {
                idOfertaTrabajo: '@oferta.id',
                idPostulante: '@idPostulante'
            },
            isArray: true
        },
        updateOferta: {
            url: 'http://localhost:1337/ofertaTrabajo/updateOferta',
            method: 'PUT',
            params: {
                idOfertaTrabajo: '@idOfertaTrabajo'
            }
        },
        deletePostulacion: {
            url: 'http://localhost:1337/postulacion?id=:idPostulacion',
            method: 'DELETE',
            params: {
                idPostulacion: '@idPostulacion'
            }
        }

    });
    return factory;
}]);
