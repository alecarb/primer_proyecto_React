import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './styles.css'
import { SegundoComponente } from './SegundoComponente'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PrimerComponente titulo="Esto es un Props"  />
   <SegundoComponente titulo2 = "Esto es un props del segundo componente" numeroYstring={"Esto es un numero: " + 4} numero = {60}/>
  </React.StrictMode>,
)
