import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
const Layout = ({ children }) => {
  return (
    <div>
      <main className="layout">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
