
const argv = require('yargs')
                .command('crear', 'Crear un elemento', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    }
                })
                .command('actualizar', 'Actualizar un tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    },
                    completado:{
                        default: true,
                        alias: 'c',
                        desc: 'Marca completado o pendiente la tarea'
                    }
                })
                .command('borrar', 'borrar una tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    },

                })
                .help()
                .argv;

module.exports = {
    argv
}