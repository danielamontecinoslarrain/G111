/*function saludar (){
console.log ("hola");
console.log ("loco");
}

saludar ();
*/



function pintar_rojo(color) {
    let elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;

}
pintar_rojo("red"); 



/* cambiar color fondo con boton

function pintarBlack(color) {
   let   elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;

}*/


/* cambiar color fondo de vuelta
function pintarRed(color) {
   let   elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;
} */



/* // FUNCIONES = 3 MANERAS DE DECLARAR 

// DECLARACION DE FUNCION
function x(){
    // instrucciones aqui   
}

// EXPRESION DE FUNCION
const b = function(){
    // instrucciones aqui
}

// ARROW FUNCTION / FUNCION FLECHA
// ES IGUAL A LA FUNCION DE EXPRESIÓN SOLO QUE MAS RESUMIDA Y NO PUEDE USAR "this"

const funcionFlecha = ()=>{
    // instrucciones aqui
    console.log("Estoy ejecutandome")
}
*/



// DECLARACION DE FUNCION
function resultado1(a, b, c){
    return a + b + c;
} 
console.log(resultado1(7, 35, 4));


// EXPRESION DE FUNCION
let resultado2 = function(a,b,c)
{
return a + b + c;
}
console.log(resultado2(7, 35, 4));





//arraw function//

 let suma = (a,b)=> a+b
 
 console.log(suma(7, 35, 4));