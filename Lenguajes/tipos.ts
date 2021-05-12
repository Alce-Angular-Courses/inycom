let saludo: string
saludo = 'Hola'
console.log(saludo)

let edad = 23

let isAlumno: boolean
isAlumno = true

let algo: string | number
algo = 12
algo = "Pepe"

function suma(a: number = 0, b = 0) {
    return a+b
}

suma(78, 90)

// Arrays

let aDatos: any[]
let aNumeros: Array<any>

 aDatos = [1, 'Hola']
 aNumeros = [1, 'Hola']

let aDatos1: number[]
let aNumeros1: Array<number>

aDatos1 = [1, 2]
aNumeros1 = [1, 2]