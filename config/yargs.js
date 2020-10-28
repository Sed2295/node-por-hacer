const descripcion = {
	alias:'d',
	demand: true,
	desc: 'Descripcion de la tarea por hacer'
}
const completado = {
	alias: 'c',
	default:true,
	desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
	.command('crear','Crear un elemento por hacer',{
		descripcion
	})
	.command('actualizar','Actualiza el estado completo de una traea',{
		descripcion,
		completado
	})
	.command('borrar','Borra una tarea',{
		descripcion
	})
	.help()
	.argv;
module.exports = {
	argv
}