import React from "react"
import { css } from "@emotion/core"

const style = css`
  font-size: 1em; // 16px
  gri-column: 1;
  justify-self: center;
  div {
    display: flex;
    flex-flow: column nowrap;
    justify-self: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-bottom: 55px;
    a {
      font-weight: 300;
    }
    span {
      font-weight: 600;
      white-space: nowrap;
    }
  }
`

const ContactInfos = ({customCss}) => (
  <div css={[style, customCss]}>
    <div>
      <a href="mailto:chris@beve.org">chris@beve.dev</a>
      <span>+33 (6) 12 52 16 14</span>
    </div>
  </div>
)

export default ContactInfos