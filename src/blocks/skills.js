import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'
import Gauge from '../components/gauge'
import Bar from '../components/bar'

const grid = css`
  grid-template-rows: 450px 260px 280px 560px;
`

const gauge = css`
  margin: 0 auto;
  width: 100%;
`

const label = css`
  font-weight: bold;
  font-size: 1.9em;
`

const bars = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  grid-row: 4;
  grid-column: 3 / span 10;
  min-height: 560px;
  background: #fff;
  border: 1px solid #ececec;
  border-left: none;
  padding: 60px 60px 80px 60px;
  & > div {
    &:first-of-type {
      flex: 1 1 50%;
    }
    &:last-of-type {
      flex: 1 1 50%;
    }
  }
`

const title = css`
  position: relative;
  grid-row: 1;
  grid-column: 2 / span 3;
  // transform: translateX(-100%);
  padding-top: 130px;
  align-self: start;
    font-size: 3.5em;
    letter-spacing: 1px;
    font-weight: 700;
  height: 140px; // Position of text "Clients" top, use grid template-row height for simulate margin top
  & > div {
    position: absolute;
    font-size: 3.5em;
    letter-spacing: 1px;
    font-weight: 700
  }
`

const Skills = () => {
  return (
    <Grid gridCss={grid} drawCols={14}>
      <div css={title}>
        Compétences
      </div>
      <div css={[label, css`grid-row: 1; grid-column: 3 / span 2;justify-self: center;align-self: end`]}>Frontend</div>
      <div css={[label, css`grid-row: 1; grid-column: 8 / span 2;justify-self: center;align-self: top;padding-top: 190px`]}>Backend</div>
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 3 / span 2;align-self: center;`]} value={90} label="React" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 5 / span 2;align-self: center`]} value={70} label="Angular" />
      <Gauge customCss={[gauge, css`grid-row: 1; grid-column: 7 / span 2;align-self: end;padding-bottom: 5px`]} value={90} label="NodeJS" />
      <Gauge customCss={[gauge, css`grid-row: 1; grid-column: 9 / span 2;align-self: end;padding-bottom: 5px`]} value={70} label="Golang" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 9 / span 2;align-self: center`]} value={90} label="Php" />
      <Gauge customCss={[gauge, css`grid-row: 2; grid-column: 11 / span 2;align-self: center`]} value={70} label="Admin système" />
      <Gauge customCss={[gauge, css`grid-row: 3; grid-column: 5 / span 2;padding-top: 5px`]} value={80} label="Vanilla JS" />
      <Gauge customCss={[gauge, css`grid-row: 3; grid-column: 7 / span 2;padding-top: 5px`]} value={70} label="Animations" />
      <div css={bars}>
        <div css={css`max-width: 46%`}>
          <div css={[label, css`margin-bottom: 41px`]}>IOT</div>
          <Bar value={70} label="C++" />
          <Bar value={80} label="Arduino" />
          <Bar value={60} label="Conception" />
          <Bar value={60} label="Électronique" />
        </div>
        <div css={css`max-width: 46%`}>
          <div css={[label, css`margin-bottom: 41px`]}>& More</div>
          <Bar value={90} label="Impression 3D" />
          <Bar value={60} label="Usinage CNC" />
          <Bar value={90} label="Modélisme (drones, hélicos, FVP...)" />
          <Bar value={60} label="3D industrielle" />
        </div>
      </div>
    </Grid>
  )
}

export default Skills;