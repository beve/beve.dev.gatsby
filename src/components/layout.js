import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"

const Layout = ({ children }) => {

  return (
    <>
      <Menu entries={[]} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
