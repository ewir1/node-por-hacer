const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripción de la tarea por hacer'
    },
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        descripcion: 'Marca como completado o pendiente la tarea'
    },
    borrado: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt)
    .command('borrar', 'Elimina una tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}