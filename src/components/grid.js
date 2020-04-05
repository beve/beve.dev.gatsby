import React from "react"
import { css } from "@emotion/core"

const style = css`
  display: grid;
`

  // border-right: 1px solid ${theme.colors.grid};
  // min-height: calc(100vh - ${theme.gridHeight});

const cols = css`
  min-height: calc(100vh - 140px);
  grid-row: 1;
  grid-column: auto / auto;
  &:nth-child(even) {
    border-right: 1px solid #ececec;
  }
`

const Grid = ({ children, gridCss, drawCols, colsCss }) => {
  let divs;
  if (drawCols) {
    divs = new Array(drawCols).fill();
  }
  return (
    <div css={[style, css`grid-template-columns: repeat(${drawCols}, 1fr)`, gridCss]}>
      {divs && divs.map((_, i) => <div css={[cols, css`grid-column: ${i+1}`, colsCss]} key={`d${i}`}></div>)}
      {children}
    </div>
  )
}

export default Grid