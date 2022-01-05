import React from 'react'
import PropTypes from 'prop-types'

import ThemeProvider from '../context/themeContext'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {


  return (
    <ThemeProvider>
      <main className="layout">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
