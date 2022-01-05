import React from 'react'
import PropTypes from 'prop-types'

const SocialCard = ({ logo, titulo, imagen, fecha, nombre, area, color }) => {
  return (
    <div className="socialCard">
      <div className="socialCard-title">
        <img className='socialCard-logo' src={logo} alt="socialCard logo" />
        <h3 style={{color}} >{titulo}</h3>
      </div>
      <p className="socialCard-fecha">{fecha}</p>
      <img className="socialCard-image" src={imagen} alt="socialCard imagen" />
      <h4>{nombre}</h4>
      <p className="socialCard-area">{area}</p>
    </div>
  )
}

SocialCard.propTypes = {
  logo: PropTypes.string,
  color: PropTypes.string,
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  fecha: PropTypes.string,
  nombre: PropTypes.string,
  area: PropTypes.string
}

export default SocialCard
