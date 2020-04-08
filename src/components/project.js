import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'

const style = css`
  position: relative;
  overflow: hidden;
  & > span {
    position: absolute;
    top: -25%;
    bottom: -25%;
    left: -25%;
    right: -25%;
    background-color: #e73c36;
    border-radius: 50%;
    opacity: 0.9;
  }
`

export default ({ customCss, id, name, illustration, logo, path }) => {
  return (
    <div css={[style, customCss]}>
      <TransitionLink 
        to={path}
        entry={{
          delay: 2,
          trigger: ({ exit, node }) => {
            gsap.fromTo(node, {opacity: 0}, {duration: 1, opacity: 1})
          }
        }}
        exit={{
          zIndex: 1,
          trigger: ({ exit, node }) => {
            gsap.fromTo(node, {opacity: 1}, {duration: 1, opacity: 0})
          }
        }}
       preventScrollJump>
        <Img
          imgStyle={{ objectFit: 'cover' }}
          fluid={illustration} />
        {<Img
          fluid={logo}
          // css={css`position: absolute; left: 50%; right: 50%; transform: translate(-50%, -50%)`}
          style={{ position: 'absolute', left: '50%', right: '50%', transform: 'translate(-50%, -50%)' }}
        />}
        <span></span>
        <div css={css`
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        bottom: -2.4em;
        font-weight: bold;
        font-size: 1.85em;
        opacity: 1;
      `}>{name}</div>
      </TransitionLink>
    </div>
  )
}