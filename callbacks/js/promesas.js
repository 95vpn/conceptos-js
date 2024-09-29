const operacion  = (numero1, numero2) => {
    const resultado = numero1 + numero2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resultado)
        }, 500)
    })
}

operacion(6, 3)
    .then(result => console.log(result))