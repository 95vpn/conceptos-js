// IIFE variable privadas que no se mesclen con otros
// (function(){
//     console.log('descde un iife')
// })();

export const nombreCliente = 'PDJGT';
export const ahorro = 200;

export function mostrarInformacion() {
    return `Cliente: ${nombreCliente} - Ahorro ${ahorro}`
}

export function tiendaSaldo(ahorro){
    if(ahorro > 0) {
        console.log('si tiene saldo')
    } else {
        console.log('el cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombreCliente, ahorro) {
        this.nombreCliente = nombreCliente;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombreCliente} - Ahorro ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('este es el export por default')
}