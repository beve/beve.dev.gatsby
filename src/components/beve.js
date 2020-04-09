import React from "react"
import { css } from "@emotion/core"

const style = (theme) => css`
  font-size: 2.5em;
  font-weight: bold;
  line-height: 0.85em;
  color: ${theme.colors.text};
  grid-area: logo;
  & > div {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    & > div:first-of-type {
      margin-left: -11px;
    }

    & > div:last-of-type {
      display: inline-flex;
      flex: 0 1 auto;
      padding-left: 2px;
      padding-right: 11px;
      position: relative;
      & > div:last-of-type {
        padding: 0;
        position: absolute;
        bottom: 1px;
        right: 0px;
        width: 7px;
        height: 6px;
        border-radius: 50%;
        background-color: ${theme.colors.primary};
      }
    }

  }
`

const Beve = () => {
  return (
    <div css={style}>
      <div data-cursor="around">
        <div>be</div>
        <div>
          <div>ve</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Beve
