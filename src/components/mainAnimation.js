import React from 'react'
import { css } from '@emotion/core'

import Grid from './grid'

const style = (theme) => {

}

const MainAnimation = () => {
  return (
    <Grid customCss={gridCSS}>
      <div css={style}></div>
    </Grid>
  )
}

export default MainAnimation