import React from 'react'
import { css } from '@emotion/core'
import Jauge from "../components/jauge"

import Grid from './grid'

const style = (theme) => {

}

const Skills = () => {
  return (
    <Grid customCss={gridCSS}>
      <div css={style}>
        {/* <Jauge value={90} label="React" />
      <Jauge value={70} label="Angular" />
      <Jauge value={80} label="Vanilla JS" /> */}
      </div>
    </Grid>
  )
}

export default Skills