import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, link, type = 'primary' }) => {
  return (
    <div className="title">
      <h2>{children}</h2>
      {link ? (
        <a href={link}>
          <button className={'button-' + type} >Ver mas</button>
        </a>
      ) : (
        <div></div>
      )}
    </div>
  )
}

Title.propTypes = {
  children: PropTypes.object,
  link: PropTypes.string,
  type: PropTypes.string
}

export default Title
