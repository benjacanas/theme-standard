import React, { createContext, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import getDeviseTheme from '../utils/getDeviseTheme'
import { Helmet } from 'react-helmet'

const themes = {
  light: {
    '--title': '#007bff',
    '--footer-container': '#182C49',

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
    '--footer-container': '#ffffff29',

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

// const { theme, setTheme, toggleTheme } = useTheme()
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  // default theme: light
  const DEFAULT_THEME = 'light'
  const [theme, setTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    const deviseTheme = getDeviseTheme()
    console.log(localTheme)
    // local storage > devise theme
    setTheme(localTheme || deviseTheme || DEFAULT_THEME)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div>{children}</div>
      <Helmet>
        <style>
          {`
            :root {
                ${Object.keys(themes[theme]).reduce((acc, variable) => {
                    return `${acc}
                    ${variable}: ${themes[theme][variable]};`
                }, ``)}
            }
          `}
        </style>
      </Helmet>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export default ThemeProvider
