import React from "react"
import { css } from "@emotion/core"

const grid = (theme) => css`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  border-left: 1px solid ${theme.colors.grid};
  border-right: 1px solid ${theme.colors.grid};
`

const Grid = ({ children }) => <div css={grid}>{children}</div>

export default Grid
