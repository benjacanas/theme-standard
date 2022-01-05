import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import getDeviseTheme from '../utils/getDeviseTheme'

const themes = {
  light: {
    '--title': '#007bff',

    '--primary': '#4a4949',
    '--primary-variant': '#4a4949',
    '--primary-button': '#666666',
    '--primary-container': '#ffffff',

    '--secondary': '#4a4949',
    '--secondary-variant': '#00a4eb',
    '--secondary-button': '#00a4eb',
    '--secondary-container': '#f2f2f2'
  },
  dark: {
    '--title': '#ffffff',

    '--primary': '#FFFFFF',
    '--primary-variant': '#A1A1A1',
    '--primary-button': '#FFFFFF',
    '--primary-container': '#121212',

    '--secondary': '#FFFFFF',
    '--secondary-variant': '#A1A1A1',
    '--secondary-button': '#FFFFFF',
    '--secondary-container': '#252525'
  }
}

const ThemeContext = createContext(null)

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const deviseTheme = getDeviseTheme()

    setTheme(deviseTheme ?? 'light')
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div style={themes[theme]}>{children}</div>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export default ThemeProvider
