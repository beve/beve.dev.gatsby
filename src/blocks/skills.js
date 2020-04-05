import React from 'react'
import { css } from '@emotion/core'
import Jauge from "../components/jauge"

import Grid from './grid'

const Skills = () => {
  return (
    <Grid gridCss={gridCSS}>
        {/* <Jauge value={90} label="React" />
      <Jauge value={70} label="Angular" />
      <Jauge value={80} label="Vanilla JS" /> */}
    </Grid>
  )
}

export default Skills