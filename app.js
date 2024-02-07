let numeroSecreto = 0
let intentos = 0;
let listaNumerosJugados = [];
let numeroMaximo= 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function verificarIntento () {
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   

   if(numeroDeUsuario=== numeroSecreto){
    asignarTextoElemento(`p`, `!Correcto!, el número secreto era: ${numeroSecreto}, lo lograste en: ${intentos} ${ (intentos>1 ) ? 'turnos':'turno'} `);
   document.getElementById("reiniciar").removeAttribute('disabled');
}else{
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento(`p`, `Noup, el número secreto es menor`);
    }else
    asignarTextoElemento(`p`, `Noup, el número secreto es mayor`);
    intentos++
limpiarCaja();
}
    return; 
    

}
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto () { 
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
console.log(numeroGenerado);
console.log(listaNumerosJugados);    
// si ya se jugaron todos los numeros
if(listaNumerosJugados.length==numeroMaximo){
asignarTextoElemento(`p`, `Ya se jugaron todos los numeros posibles. ¡Gracias por jugar!`);
}else{

//si el numero generado esta incluido en la lista
if(listaNumerosJugados.includes (numeroGenerado)){
return generarNumeroSecreto();
} else{
    listaNumerosJugados.push(numeroGenerado);
   return numeroGenerado;
}
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Adivina el número secreto');
    asignarTextoElemento ('p' ,`Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1

}

function reiniciarJuego (){
//limpiar caja
limpiarCaja();
//indicar mensaje de inicio
//generar el numero secreto
//reiniciar el contador de intentos
condicionesIniciales();
//des habilitar el botón de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true')


}


condicionesIniciales ();
