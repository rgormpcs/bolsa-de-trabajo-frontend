module.exports = {
  attributes: {
    cedula: {
      type: 'string',
      required:true
    },
    nombres: {
      type: 'string',
      required:true
    },
    apellidos: {
      type: 'string',
      required:true
    },
    telefono: {
      type: 'integer',
      required:true
    },
    celular: {
      type: 'integer',
      required:true
    },
    email: {
      type: 'mail',
      required:true
    },
    nacionalidad: {
      type: 'string',
      required:true
    },
    estadoCivil: {
      type: 'string',
      required:true
    },
    genero: {
      type: 'string',
      required:true
    },
    fechaNacimiento: {
      type: 'date',
      required:true
    },
    descripcion: {
      type: 'string',
      required:true
    },
    subirCurriculum: {
      type: 'text',
      required:true
    },
    password: {
      type: 'string',
      required:true
    }    

    }
};
