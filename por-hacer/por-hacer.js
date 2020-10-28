const fs = require('fs')
let listadoPorHacer = [];
const guardaDB = () => {
	let data = JSON.stringify(listadoPorHacer)
	fs.writeFile('db/data.json', data, (err) => {
	  if (err) throw err;
	  	console.log('Archivo guardado con éxito');
	});
}
const cargaDB = () => {	
	try {
		listadoPorHacer = require('../db/data.json');
	} catch (error) {
		listadoPorHacer = [];
	}
}

const getListado = () => {
	cargaDB();
	return listadoPorHacer;
}

const crear = (descripcion) => {
	cargaDB();
	let porHacer = {
		descripcion,
		completado: false
	}
	listadoPorHacer.push(porHacer)
	guardaDB();
	return porHacer;
}

const actualizar = (descripcion,completado=true)=> {
	cargaDB();
	//findIndex es una funcion de javascript
	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
	if(index >= 0) {
		listadoPorHacer[index].completado = completado;
		guardaDB();
		return true;
	} else
		return false;
}
const  borrar = (descripcion) => {
	cargaDB();	
	let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
	if(listadoPorHacer.length === nuevoListado.length)
		return false;
	else{
		listadoPorHacer = nuevoListado;
		guardaDB();
		return true;
	}
}
module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}