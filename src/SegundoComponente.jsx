import './PrimerComponente.css'
import React from 'react'


const string = "texto random";

export const SegundoComponente = ({titulo2, numero, numeroYstring}) => {
  return (
    <>
        <h1>{titulo2}</h1>
        <h4>{string}</h4>
        <h4>{numero}</h4>
        <h4>{numeroYstring}</h4>
    </>
  )
}
