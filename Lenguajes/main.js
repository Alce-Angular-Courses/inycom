import { suma, resta, sample } from './funciones.module.js';


(() => {
    console.log('Desde main', suma(45, 76))
    console.log('Desde main', resta(45, 76))

    sample()
})()

