import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const style = css`
  position: relative;
  & > span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: red;
    opacity: 0.1;
  }
`

export default ({ customCss, id, name, illustration, logo }) => {
  return (
    <div css={[style, customCss]}>
      <Img
        imgStyle={{ objectFit: 'cover' }}
        fluid={illustration} />
      {/* <Img fluid={logo} /> */}
      <span></span>
      <div css={css`
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        bottom: -2.4em;
        font-weight: bold;
        font-size: 1.85em;
        opacity: 1;
      `}>{name}</div>
    </div>
  )
}