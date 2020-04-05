import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Helmet } from "react-helmet"

import Beve from "./beve"
import Cursor from "./cursor"
import Menu from "./menu"
import Grid from "./grid"
import ContactInfos from "./contactInfos"

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

const gridStyle = css`
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc( 100vh );
  grid-template-areas:
  "logo logo spacer spacer spacer spacer menu menu menu menu menu menu menu menu"
  "infos infos content content content content content content content content content content content content"
`

const spacer = theme => css`
  border-right: 1px solid ${theme.colors.grid};
  grid-area: spacer;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>
        <div css={style}>
          <Grid customCss={gridStyle}>
            <Beve />
            <div css={spacer}></div>
            <Menu />
            <main>{children}</main>
            <ContactInfos />
          </Grid>
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
