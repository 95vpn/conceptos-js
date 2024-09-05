// function puedesDetectarElProblema() {
//     "useStric";
//     for (contador = 0; contador < 10; contador++) {
//         console.log("felix feliz")
        
//     }
// }
// puedesDetectarElProblema();

// function numeroAString(n, base = 10) {
//     let resultado = "", signo = "";
//     if(n < 0) {
//         signo = "";
//         n= -n
//     }
//     console.log(n)
//     do {
//         resultado = String(n % base) + resultado;
//         n /= base;
        
//     } while (n > 0) 
//         return signo + resultado;
// }


// console.log(numeroAString)

function pedirDirección(pregunta){
    let resultado = prompt(pregunta);
    if (resultado.toLowerCase() == "izquierda")
        return "I";
    if (resultado.toLowerCase() == "derecha")
        return "D";
    throw new Error("Direccion invalida: " + resultado)
}

function mirar() {
    if (pedirDirección("Hacia que direccion quieres ir ?") == "I"){
        return "una casa" || console.log("Una casa");
    } else {
        return "dos osos furiosos" || console.log("dos osos furiosos");
    }
}

try {
    console.log("tu ves",  mirar());

} catch (error) {
    console.log("Algo incorrecto sucedio: " + error);
}

// for (;;) {
//     try {
//         let direccion = pirDirecion("Donde?");
//         console.log("tu elegiste", direccion);
//         break;
//     } catch (e) {
//         console.log("No es una dirección válida. Intentalo de nuevo")
//     }
// }