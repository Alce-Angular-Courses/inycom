class Mascota {
    constructor(
        especie: string,
        nombre: string,
        edad: number
    ) {}
}
 
class Persona {

    nombre: string
    edad: number
    isAlumno: boolean
    mascota: Mascota
    constructor(nombre: string, edad: number, isAlumno: boolean, mascota: Mascota) {
        this.nombre = nombre
        this.edad = edad
        this.isAlumno = isAlumno
        this.mascota = mascota
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años` )
    }
}

const p1 = new Persona('Pepe', 28, true, new Mascota('gato', 'Felix', 1))


