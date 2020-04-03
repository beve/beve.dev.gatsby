import React from "react"
import { css } from "@emotion/core"

const grid = css`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  width: 100%;
  height: 100vh;
  border: 1px solid #ccc;
`

const Grid = ({ children }) => <div css={grid}>{children}</div>

export default Grid
