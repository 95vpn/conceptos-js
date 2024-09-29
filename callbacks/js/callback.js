const operation = (numero1, numero2, callback) => {
    const resultado = numero1 + numero2;
    return setTimeout(() => {
        callback(resultado)
    }, 1000)
    
}


operation(1, 3, (result) => {
    console.log(result)
})