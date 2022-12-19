import { modelos } from "./modelos.js";




export class ModeloPieza{
    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = [modelos[this.modelo].matriz[this.angulo],this.angulo]
        this.x = 1
        this.y = 1
        this.longitud = this.matriz[0][0].lenght||0
        this.altura = this.matriz[0].lenght||0
        
        console.log(this.matriz)
        console.log("La altura es: " + this.altura)
        console.log("La longitud es: " + this.longitud)
        
    }

    girar = ()=>{
        this.angulo++
        if(this.angulo==4){
            this.angulo=0
        }
    }
}
