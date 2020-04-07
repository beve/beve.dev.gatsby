import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'
import Gauge from '../components/gauge'
import Bar from '../components/bar'

const grid = css`
  grid-template-rows: 220px 220px 150px 560px;
`

const gauge = css`
  margin: 0 auto;
`

const bars = css`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  grid-row: 4;
  grid-column: 1 / span 10;
  min-height: 560px;
  background: #fff;
  border: 1px solid #ececec;
  border-left: none;
  padding: 60px 60px 80px 60px;
  & > div {
    font-weight: bold;
    font-size: 1.9em;
    &:first-child {
      flex: 1 1 50%;
    }
    &:last-child {
      flex: 1 1 50%;
    }
  }
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
      <div css={bars}>
        <div>
          <div>IOT</div>
          <Bar value={90} />
        </div>
        <div>
          <div>& More</div>
        </div>
      </div>
    </Grid>
  )
}

export default Skills;