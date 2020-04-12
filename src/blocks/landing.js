import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'
import AnimationButton from '../components/animationButton'

const grid = css`
  overflow: hidden;
  min-height: 100vh;
`

const caption = (theme) => css`
  grid-row: 1;
  grid-column: 2 / span 12 ;
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
  text-transform: uppercase;
  font-size: 95px;
  font-size: 5.95em;
  line-height: 106px;
  line-height: 1.12em;
  letter-spacing: 2px;
  // margin-top: -120px;
  font-weight: bold;
  span {
    color: ${theme.colors.title};
  }
  @media (max-width: 1366px) {
    display: block;
    margin-left: -0.2em;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
  }
  @media (max-width: 800px) {
    max-width: 500px;
  }
`

const button = (theme) => css`
  display: flex;
  margin: auto 0;
  grid-row: 1;
  grid-column: 13 / span 2;
  box-sizing: border-box;
  transform: translateX(calc(-50%));
`

const desc = (theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: 1;
  grid-column: 4 / -2 ;
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: 300;
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`

export default () => {
  return (
    <>
      <Grid gridCss={grid} drawCols={14}>
        <div css={caption}>
          <div>Make dev.</div>
          <span>great again&nbsp;!</span>
        </div>
        <AnimationButton customCss={button} />
        <div css={desc}>
          <div>Hello, je m'appelle <span>Christophe Beveraggi</span></div>
          <div>Je suis développeur depuis 20 ans, concepteur d'objet amusants, et maker.</div>
        </div>
      </Grid>
    </>
  )
}