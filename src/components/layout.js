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
    primary: "#f62f1c",
    grid: "#ececec",
    text: "#343434"
  },
  gridHeight: "140px"
}

const style = (theme) => css`
  font-family: ${theme.font};
  color: ${theme.colors.text};
  a {
    text-decoration: none;
    color: ${theme.colors.text};
  }
`

const topGrid = css`
  position: fixed;
  z-index: 10;
  grid-template-columns: repeat(7, 1fr);
  width: 100vw;
  max-width: 1440px;
  grid-template-areas:
  "logo spacer1 spacer2 menu menu menu menu";

  @media screen and (min-width: 1440px) {
    left: 50%;
    transform: translateX(calc(-50%));
  }
`

const mainGrid = css`
  margin: 0 auto;
  width: 100vw;
  max-width: 1440px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas:
  "infos main main main main main main"
`
const spacer1 = theme => css`
  grid-area: spacer1;
  border-right: 1px solid ${theme.colors.grid};
  background-color: #fff;
`

const spacer2 = theme => css`
  grid-area: spacer2;
  border-right: 1px solid ${theme.colors.grid};
  background-color: #fff;
`

const main = theme => css`
  padding-top: 140px;
  grid-area: main;
  min-height: calc(100vh - ${theme.gridHeight});
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>
        <div css={style}>
          <Grid customCss={topGrid}>
            <Beve />
            <div css={spacer1}></div>
            <div css={spacer2}></div>
            <Menu />
          </Grid>
          <Grid customCss={mainGrid}>
            <ContactInfos />
            <main css={main}>{children}</main>
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
