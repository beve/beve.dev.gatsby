import React from "react"
import { css } from "@emotion/core"

const style = (theme) => css`
  display: inline-block;
  font-size: 2.5em;
  font-weight: bold;
  line-height: 0.85em;
  color: ${theme.colors.text};
  & > div:last-of-type {
    display: inline-flex;
    position: relative;
    padding-left: 2px;
    div:first-of-type {
      flex: 0 1 auto;
    }
    div:last-of-type {
      position: absolute;
      bottom: 2px;
      right: -11px;
      width: 7px;
      height: 6px;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
    }
  }
`

const Beve = () => {
  return (
    <div data-cursor="around" css={style}>
      <div>be</div>
      <div>
        <div>ve</div>
        <div></div>
      </div>
    </div>
  )
}

export default Beve
