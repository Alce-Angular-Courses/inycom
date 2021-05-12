// Declarar funciones

// ES6 parametros con valor por defecto
export function suma(a = 0, b = 0) {
    return a+b
}

console.log(suma(3, 6))
console.log(suma())
console.log(suma(6))
console.log(suma('Hola', 'Mundo'))

// Asignar funciones

export const resta = function (a = 0, b = 0) {
    return a-b
}

resta.definicion = 'Esto es una resta'

console.log(resta(3, 6))
console.log(resta)
console.log(resta.definicion)


// ES6 Arrow Functions

// const prod = (a = 1, b = 1) => { return a * b}
const prod = (a = 1, b = 1) => a * b

console.log(prod(3, 6))

// Callback

// Funciones de primer orden

function hazalgo(a=0, b=0, callback) {
 console.log(callback(a,b))
}

hazalgo(624, 39, resta)


// Callback sincrono
const aDatos = [4, 6, 5, 7, 2]

const aCuadrados = aDatos.map( item => item * item ) 
console.log(aCuadrados)

// Callback asincrono

setTimeout(() => {
    console.log('Por fin')
}, 1000)

// ES template string
let user = 'Pepe'
console.log(`
        Hola ${user}, 
        como estas`)