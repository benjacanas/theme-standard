import React from 'react'
import networks from '../images/image 33.png'
import googleLogoLight from '../images/google-white-logo.png'

const Footer = () => {
  return (
    <footer>
      <img className="networks" src={networks} alt="redes sociales" />
      <ul className="nav">
        <li>
          <h3>INSTITUCIONAL</h3>
          <ul>
            <li>Indocción</li>
            <li>Directorio</li>
            <li>Formularios</li>
            <li>Politicas</li>
          </ul>
        </li>
        <li>
          <h3>COMUNIDAD</h3>
          <ul>
            <li>Noticias</li>
            <li>Sociales</li>
            <li>Reconocimientos</li>
            <li>Blog</li>
            <li>Búsquedas</li>
            <li>Agenda</li>
          </ul>
        </li>
      </ul>
      <img src={googleLogoLight} alt="footer logo" />
    </footer>
  )
}

export default Footer
