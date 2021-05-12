console.log('Hola Mundo')

// ES6 Declaración variables

var a
let b = 9
b = b*b
console.log(b)
const c = 63
// c = 2 error

const ob = {nombre: 'Pepe', edad: 23}
ob.nombre = 'Jose'
ob.altura = 178 
delete ob.edad

// ob = 24

console.log(ob)

function algo() {
    var a
    let b = 8
    const ob = 67
    console.log(b)

    {
        let b = 12
        const ob = true
        console.log(b)
    }
}

algo()