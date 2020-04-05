import React from "react"
import { css } from "@emotion/core"

const style = theme => css`
  font-size: 1em; // 16px
  grid-area: infos;
  border-right: 1px solid ${theme.colors.grid};
  background-color: #fff;
  div {
    position: fixed;
    bottom: 90px;
    margin-left: 24px;
    display: flex;
    flex-flow: column nowrap;
    transform: rotate(270deg);
    a {
      font-weight: 300;
    }
    span {
      font-weight: 600;
      white-space: nowrap;
    }
  }
`

const ContactInfos = () => (
  <div css={style}>
    <div>
      <a href="mailto:chris@beve.org">chris@beve.org</a>
      <span>+33 (6) 12 52 16 14</span>
    </div>
  </div>
)

export default ContactInfos