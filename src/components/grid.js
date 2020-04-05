import React from "react"
import { css } from "@emotion/core"

const style = css`
  box-sizing: border-box;
  display: grid;
`

const Grid = ({ children, customCss }) => {
  return (
    // <div css={theme => ({ ...style, ...customCss })}>
    <div css={[style, customCss]}>
      {children}
    </div>)
}

export default Grid