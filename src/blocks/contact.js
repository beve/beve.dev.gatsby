import React from 'react'
import { css } from '@emotion/core'

import Grid from '../components/grid'

const gridCss = css`
  grid-template-rows: 280px 1fr 190px;
`

const formCss = css`
  display: flex;
  grid-area: 2 / 3 / span 1 / span 10;
  flex-flow: row wrap;
  input, textarea {
  box-sizing: border-box;
    border: none;
    background-color: #ebebeb;
    font-size: 22px;
    font-size: 1.4em;
    font-family: Open Sans;
    font-weight: 300;
    padding: 20px 30px 24px 30px;
    &:focus {
      background-color: #333;
      color: #fff;
    }
  }
  input[type="text"] {
    flex: 0 0 50%;
  }
  input[type="email"] {
    flex: 0 0 50%;
  }
  textarea {
    margin-top: 60px;
    height: 10em;
    flex: 0 0 100%;
  }
`

const title = css`
  grid-row: 1;
  grid-column: 7 / span 2;
  justify-self: center;
  align-self: end;
  font-size: 3.5em;
  line-height: 2.85em;
  letter-spacing: 1px;
  font-weight: 700
`

const submit = css`
  grid-row: 3;
  grid-column: 7 / span 2;
  align-self: center;
  justify-self: center;
`

export default () => {
  return (
    <Grid gridCss={gridCss} drawCols={14}>
      <div css={title}>
        Contact
      </div>
      <div css={formCss}>
        <input type="text" placeholder="Nom Prénom"></input>
        <input type="email" placeholder="Email"></input>
        <textarea placeholder="Message"></textarea>
      </div>
      <div css={submit}>submit</div>
    </Grid>
  )
}