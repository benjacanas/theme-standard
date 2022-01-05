import React from 'react'
import logoDark from '../images/google-white-logo.png'
import logoLight from '../images/logo-Google.png'
import { useTheme } from '../context/themeContext'
const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <img src={theme === 'light' ? logoLight : logoDark} alt="logo" />
      <div>
        <button className="link">Link</button>
        <button onClick={toggleTheme} className="default">
          Button
        </button>
      </div>
    </header>
  )
}

export default Header
