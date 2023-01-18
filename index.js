const logger = require('./logger')

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble = miFuncion("a1a") 
const numero = "5";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}



logger.info("Hola esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")