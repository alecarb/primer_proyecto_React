import React from 'react'
import './PrimerComponente.css'
import PropTypes from 'prop-types'

const string = 'Esto es un texto';
const number = 123456;
const array = ['Curso de React', 'YouTube', 4, 10000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: 'Curso de Javascript', duracion: 4 };
const fecha = new Date();


export const PrimerComponente = ({titulo, subtitulo }) => {
  return (<>
    <h1>{JSON.stringify(fecha)}</h1> {/* renderiza un objeto */}

    <h4>{ string }</h4>
    {/* Asi se pone un comentario de una línea en JSX */}
    <h1>...................................................................</h1>
    <><h1>Props:</h1>
      <h4>{titulo}</h4>
      <h3>{subtitulo}</h3>
    </>
  </>
  )
}

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
};

PrimerComponente.defaultProps = {
  titulo: "Props: Agregar titulo, mensaje por default",
  subtitulo: "Props: Mensaje por default "
};

