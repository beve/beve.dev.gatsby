import React from 'react'
import { css } from '@emotion/core'

import Gauge from '../components/gauge'
import Grid from '../components/grid'

const grid = css`
  grid-template-rows: 220px 220px 150px;
`

const gauge = css`
  margin: 0 auto;
`

const Skills = () => {
  return (
    <Grid gridCss={grid} drawCols={12}>
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 1 / span 2`]} value={90} label="React" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 3 / span 2`]} value={70} label="Angular" />
      <Gauge customCss={[gauge, css`grid-row: 3; grid-column: 3 / span 2`]} value={80} label="Vanilla JS" />
      <Gauge customCss={[gauge, css`grid-row: 1; grid-column: 5 / span 2`]} value={90} label="NodeJS" />
      <Gauge customCss={[gauge, css`grid-row: 3; grid-column: 5 / span 2`]} value={70} label="Animations Css/SVG/Canvas" />
      <Gauge customCss={[gauge, css`grid-row: 1; grid-column: 7 / span 2`]} value={70} label="Go" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 7 / span 2`]} value={90} label="Php" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 9 / span 2`]} value={70} label="Admin système" />
    </Grid>
  )
}

export default Skills;