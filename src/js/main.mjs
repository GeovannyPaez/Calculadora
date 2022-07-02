 import { Calculadora} from "./Calculadora.mjs";
import { Display } from "./Display.mjs";

const displayValorAnterior= document.getElementById('valor-anterior');
const displayValorActual= document.getElementById('valor-actual');

const botonesNumeros= document.querySelectorAll('.number');

 const botonesOperadores= document.querySelectorAll('.operador');

 const display= new Display(displayValorAnterior,displayValorActual)
    

     botonesNumeros.forEach( buton =>{
        buton.addEventListener('click',()=>{
            
             display.agregarNumero(buton.innerHTML);
        });
     });
 
     const buttonBorrar = document.getElementById('button-borrar');
     buttonBorrar.addEventListener('click',()=>{
        display.borrar();
     });
     const buttonBorrarTodo= document.getElementById('button_borrar-todo');
     buttonBorrarTodo.addEventListener('click',()=>{
        display.borrarTodo();
     });

    botonesOperadores.forEach( buton=> {
        buton.addEventListener('click',()=>{
            
           return display.computar(buton.value);
        })
    })



   
 

   