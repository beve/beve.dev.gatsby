import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'

const grid = css`
`

const caption = (theme) => css`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 12 ;
  grid-row: 1;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  font-size: 95px;
  line-height: 106px;
  margin-top: -120px;
  font-weight: bold;
  span {
    color: ${theme.colors.primary};
  }
`

const desc = (theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column: 2 / span 12 ;
  margin-bottom: 50px;
  grid-row: 1;
  font-size: 22px;
  font-weight: 300;
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`

const Landing = () => {
  return (
    <>
      <Grid gridCss={grid} colsCss={css`z-index: -1`} drawCols={12}>
        <div css={caption}>
          <div>Make dev.</div>
          <span>great again !</span>
        </div>
        <div css={desc}>
          <div>Hello, je m'appelle <span>Christophe Beveraggi</span></div>
          <div>Je suis développeur depuis 20 ans, concepteur d'objet amusants, et maker.</div>
        </div>
      </Grid>
    </>
  )
}

export default Landing 