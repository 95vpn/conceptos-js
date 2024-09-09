function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado= restar(10, 5);
esperado = 6;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

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