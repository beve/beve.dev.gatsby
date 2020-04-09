import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'
import AnimationButton from '../components/animationButton'

const grid = css`
  overflow: hidden;
  min-height: 100vh;
`

const caption = (theme) => css`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 12 ;
  grid-row: 1;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  font-size: 95px;
  line-height: 106px;
  letter-spacing: 2px;
  margin-top: -120px;
  font-weight: bold;
  span {
    color: ${theme.colors.title};
  }
`

const desc = (theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: 1;
  grid-column: 4 / span 14 ;
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: 300;
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`

const buttonContainer = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: -120px;
  grid-row: 1;
  grid-column: 13 / span 2;
`

const button = (theme) => css`
  transform: translateX(calc(-50%));
`

export default () => {
  return (
    <>
      <Grid gridCss={grid} drawCols={14}>
        <div css={caption}>
          <div>Make dev.</div>
          <span>great again !</span>
        </div>
        <div css={buttonContainer}>
          <AnimationButton customCss={button} />
        </div>
        <div css={desc}>
          <div>Hello, je m'appelle <span>Christophe Beveraggi</span></div>
          <div>Je suis développeur depuis 20 ans, concepteur d'objet amusants, et maker.</div>
        </div>
      </Grid>
    </>
  )
}