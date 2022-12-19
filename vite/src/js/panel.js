import { ModeloPieza } from "./modeloPieza.js"
import { modelos } from "./modelos.js"

export const panel={

            matriz: [
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1],
            ],
        
        pintaPanel: ()=>{
          var html=""
            for(let y=0; y<panel.matriz.length;y++){
                html+=`<div>`
                for(let x=0; x<panel.matriz[y].length;x++){
                    html+=`<div>${panel.matriz[y][x]}</div>`
                }
                html+=`</div>`
            }
            
        },

        crearNuevaPieza: ()=>{
            const nuevaPieza = new ModeloPieza(0)
            nuevaPieza.modelos = Math.floor(Math.random()*2)
           

            nuevaPieza.x = Math.floor(Math.random()*7)
          
            nuevaPieza.y = 1
            nuevaPieza.angulo=0
            return nuevaPieza
            },
            
        }

    

    
       
    
     

