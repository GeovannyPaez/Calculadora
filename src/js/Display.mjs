  import { Calculadora } from "./Calculadora.mjs";

 
  export class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual=displayValorActual,
        this.displayValorAnterior= displayValorAnterior;
        this.tipoOperacion= undefined;
        this.calculadora= new Calculadora();
        this.valorActual ='';
        this.valorAnterior= '';
        this.signos={
            sumar:'+',
            restar:'-',
            dividir:'%',
            multiplicar: 'X'
        }
    }
    borrarTodo(){
       this.valorActual='';
       this.valorAnterior='';
       this.tipoOperacion=undefined;
       this.imprimirValores();
    }
    borrar(){
        this.valorActual= this.valorActual.toString().slice(0,-1);
        this.imprimirValores()
    }
    agregarNumero(numero){
        if(numero=== '.' && this.valorActual.includes('.')) return
        this.valorActual= this.valorActual.toString()+  numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent= this.valorActual;
        this.displayValorAnterior.textContent=`${ this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    
    calcular(){
        const valorAnterior= parseFloat(this.valorAnterior) ;
        const valorActual=parseFloat(this.valorActual) ;
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual= this.calculadora[this.tipoOperacion](valorAnterior,valorActual)
    }
    computar(tipo){
        this.tipoOperacion  !== 'igual' && this.calcular();
        this.tipoOperacion = tipo ;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual= '';
        this.imprimirValores();
     }
  
 }