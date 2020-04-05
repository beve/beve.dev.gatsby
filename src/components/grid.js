import React from "react"
import { css } from "@emotion/core"

const style = css`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 140px 1fr;
`

const Grid = ({ children, customCss }) => {
  return (
    // <div css={theme => ({ ...style, ...customCss })}>
    <div css={[style, customCss]}>
      {children}
    </div>)
}

export default Grid