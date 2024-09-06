const aplicarDescuento = new Promise ( (resolve, reject) => {
    const descuento = true;

    if(descuento) {
        resolve('Descuento Aplicado')
    } else {
        reject('No se puso aplicar el descuento')
    }
} )


aplicarDescuento
    .then( resultado => {
        descuento(resultado)
    })
    .catch(err => {
        console.log(err)
    })

// console.log(aplicarDescuento)

// Hay 3 valores posibles

// fulfilled -> EL promise se cumple
// rejected -> El promise no se cumplio
//pending -> no se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje)
}