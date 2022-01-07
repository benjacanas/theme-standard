import React from 'react'
import PropTypes from 'prop-types'
import './searchCard.scss'

const SearchCard = ({ logo, fecha, titulo, link }) => {
  return (
    <div className="searchCard">
      <img src={logo} alt="logo" />
      <div className="searchCard-title">
        <p className="searchCard-title-date">{fecha}</p>
        <p className="searchCard-title-text">{titulo}</p>
      </div>
      {link && (
        <a href={link}>
          <button>Ver mas</button>
        </a>
      )}
    </div>
  )
}

SearchCard.propTypes = {
  logo: PropTypes.string,
  titulo: PropTypes.string,
  fecha: PropTypes.string,
  link: PropTypes.string,
}

export default SearchCard