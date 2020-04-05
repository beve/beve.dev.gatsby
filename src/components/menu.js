import React from "react"
import { css } from "@emotion/core"

const style = (theme) => css`
  display: flex;
  height: 139px;
  border-bottom: 1px solid ${theme.colors.grid};
  justify-content: space-evenly; 
  align-items: center;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: 600;
  grid-area: menu;
  a {
    font-size: 14px;
    font-size: 0.85em;
    letter-spacing: 1.8px;
    color: ${theme.colors.text}
  }
`

const Menu = () => {
  return (
    <div css={style}>
      <a href="/" data-cursor="big">
        Accueil
      </a>
      <a href="/" data-cursor="big">
        Compétences
      </a>
      <a href="/" data-cursor="big">
        Projets
      </a>
      <a href="/" data-cursor="big">
        Clients
      </a>
      <a href="/" data-cursor="big">
        Contact
      </a>
    </div>
  )
}

export default Menu
