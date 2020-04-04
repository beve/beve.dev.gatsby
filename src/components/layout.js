import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import { Helmet } from "react-helmet"

import Cursor from "./cursor"
import Menu from "./menu"

const theme = {
  font: "Open Sans",
  colors: {
    primary: "#e53b32",
    grey: "#8e8e8e",
  },
}

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: theme.font }}>
          <Menu entries={[]} />
          <div>
            <main>{children}</main>
          </div>
        </div>
        <Cursor />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
