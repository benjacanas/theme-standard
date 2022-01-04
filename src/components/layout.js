import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => {
    return (
        <main className='layout'>
            {children}
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.object,
  }
  
export default Layout
