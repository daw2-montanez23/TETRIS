// Import our custom CSS
import './scss/styles.scss'
//funciones JS
import './js/modelos.js'
import {panel} from './js/panel.js'


// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { ModeloPieza } from './js/modeloPieza.js';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

  //console.log(panel)
  const miModeloPieza = new ModeloPieza(0)
  console.log(miModeloPieza)
  console.log(panel.crearNuevaPieza())

