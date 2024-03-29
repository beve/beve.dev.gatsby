import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Helmet } from "react-helmet"

import Beve from "./beve"
import Menu from "./menu"
import Grid from "./grid"
import ContactInfos from "./contactInfos"

// import gsap from 'gsap'
// import GSDevTools from 'gsap/GSDevTools3'
// gsap.registerPlugin(GSDevTools)
// GSDevTools.create()

const theme = {
  font: "Open Sans",
  colors: {
    title: "#f52f1b",
    primary: "#e73c36",
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
  transform: translateX(0);
  grid-template-areas:
  "logo ... ... menu menu menu menu";

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
  "main main main main main main main"
`

// const spacer1 = theme => css`
//   grid-area: spacer1;
//   border-right: 1px solid ${theme.colors.grid};
//   // background-color: #fff;
//   // filter: blur(30px);
//   // opacity: .9;
//   // backdrop-filter: blur(4px);
// `

// const spacer2 = theme => css`
//   grid-area: spacer2;
//   border-right: 1px solid ${theme.colors.grid};
//   // background-color: #fff;
//   // filter: blur(30px);
//   // opacity: .9;
//   // backdrop-filter: blur(4px);
// `

const bottomGrid = css`
  position: fixed;
  z-index: 10;
  bottom: 0;
  grid-template-columns: repeat(7, 1fr);
  width: 100vw;
  max-width: 1440px;
  transform: translateX(0);
  grid-template-areas:
  "infos . . . . . .";
  pointer-events: none;
  @media screen and (min-width: 1440px) {
    left: 50%;
    transform: translateX(calc(-50%));
  }
`

const main = theme => css`
  // padding-top: 140px;
  grid-area: main;
  min-height: calc(100vh - ${theme.gridHeight});
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>
        <div css={style}>
          {/* <TransitionPortal> */}
            <Grid gridCss={topGrid}>
              <Beve />
              {/* <div css={spacer1}></div>
              <div css={spacer2}></div> */}
              <Menu />
            </Grid>
          {/* </TransitionPortal> */}
          <Grid gridCss={mainGrid}>
            <main css={main}>{children}</main>
          </Grid>
          <Grid gridCss={bottomGrid}>
            <ContactInfos customCss={css`grid-area: infos`}/>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
