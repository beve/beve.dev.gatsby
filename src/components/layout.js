import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Helmet } from "react-helmet"

import Beve from "./beve"
import Cursor from "./cursor"
import Menu from "./menu"

const theme = {
  font: "Open Sans",
  colors: {
    primary: "#e53b32",
    grid: "#ececec",
    text: "#343434"
  },
}

const style = (theme) => css`
  font-family: ${theme.font};
  color: ${theme.colors.text};
  a {
    text-decoration: none;
    color: ${theme.colors.text};
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>
        <div css={style}>
          <Beve />
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
