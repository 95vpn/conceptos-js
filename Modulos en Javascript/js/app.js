import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tiendaSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion()

console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro))

tiendaSaldo(ahorro)

const cliente = new Cliente (nombreCliente, ahorro);

console.log(cliente.mostrarInformacion())

const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en Linea')

console.log(empresa)

