
class Person {

    constructor(nombre, edad, isAlumno) {
        this.nombre = nombre
        this.edad = edad
        this.isAlumno = isAlumno
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años` )
    }
}


/* function Persona(nombre, edad, isAlumno) {
    this.nombre = nombre
    this.edad = edad
    this.isAlumno = isAlumno
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años` )
} */

const p2 = new Person('Elena', 25, true)
const p3 = new Person('Ernesto', 28, false)
p3.altura = 180
delete p3.isAlumno

// p1.saludar() edad
p2.saludar()
p3.saludar()

console.log(p2)
console.log(p3)

class Alumno extends Person {

    constructor(nombre, edad, isAlumno, curso) {
        super(nombre, edad, isAlumno)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}


const a1 = new Alumno('Juan', 25, true, 'Angular')

a1.saludar()