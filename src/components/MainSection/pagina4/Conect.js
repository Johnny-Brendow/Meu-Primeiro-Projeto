// import {Clientes,Aluguéis} from './Clientes'
// function obterCliente(callback) {
//     setTimeout(function () {
//         return callback(null,Clientes)
// },2000)
// }

// function obterAluguél(idCliente,callback) {
// setTimeout(()=> {
//     return callback(null,Aluguéis.filter(function(aluguél){
//       return aluguél.idCliente === idCliente; 
// }))
// },2000)
// }
// function resolverCliente(error,clienteR){
// if (error){
// console.error('VISH', error)
// }else
// console.log('cliente :',clienteR)
// return;
// }

// function resolverAluguél(error2,aluguélR){
// if (error2){
// console.error('VISH', error2)}
// else
// console.log('aluguél :',aluguélR)
// return;
// }

// export const resultado = obterCliente(resolverCliente)

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\
import {Clientes,Aluguéis} from '../../../Database/Clienteses'

export async function obterTodosOsClientes() {
const TodosOsClientes = await Clientes
return {
TodosOsClientes
       }
}

export async function obter1ClienteEAluguéis(numero) {
const Cliente = await Clientes[numero]
const AluguéisDesseCliente = await Aluguéis.filter((Aluguéis)=>Aluguéis.idCliente === numero)
return {
 Cliente,
 AluguéisDesseCliente
}
}
