export function suma(a = 0, b = 0) {
    return a+b
}

export const resta = function (a = 0, b = 0) {
    return a-b
}


// ES6 Arrow Functions

// const prod = (a = 1, b = 1) => { return a * b}
export const prod = (a = 1, b = 1) => a * b

// Callback

// Funciones de primer orden

export function sample() {
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
}

