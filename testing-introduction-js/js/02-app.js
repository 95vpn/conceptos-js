function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

async function sumaAsinc(a, b) {
    return Promise.resolve( suma(a, b) )
}

let resultado = suma(2, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado= restar(10, 5);
esperado = 6;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

test('Suma 10 + 20 y el resultado debe ser 30', async() => {
    const resultado = await sumaAsinc(10, 20)
    const esperado = 30
    expected(esperado).toBe(resultado)
})

async function  test(mesaje, callback) {
    try {
        await callback();
        console.log(`El test ${mesaje} se ejecutó correctamente`)

    } catch (error) {
        console.error('Error')
        console.error(error)
    }
}

function expected( esperado ) {
    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} es diferente a ${esperado}; la prueba no pasó`)
            } else {
                console.log('la prueba pasó correctamente')
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} es igual a ${esperado}; la prueba no pasó`)
            } else {
                console.log('la prueba pasó correctamente')
            }
        }
    }
}