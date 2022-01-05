import React from 'react'
import logoLight from '../images/google-white-logo 1.png'
const Header = () => {
  return (
    <header>
      <img src={logoLight} alt="logo" />
      <div>
        <button className="link">Link</button>
        <button className="default">Button</button>
      </div>
    </header>
  )
}

export default Header
