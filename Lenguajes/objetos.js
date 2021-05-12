const p1 = {nombre: 'Pepe', edad: 23, isAlumno: true}

function Persona(nombre, edad, isAlumno) {
    this.nombre = nombre
    this.edad = edad
    this.isAlumno = isAlumno
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años` )
}

const p2 = new Persona('Elena', 25, true)
const p3 = new Persona('Ernesto', 28, false)
p3.altura = 180
delete p3.isAlumno

// p1.saludar() edad
p2.saludar()
p3.saludar()

console.log(p1)
console.log(p2)
console.log(p3)