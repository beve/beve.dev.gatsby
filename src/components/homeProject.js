import React, { useRef } from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'

// import useTimeline from '../hooks/useTimeline'

const style = css`
  position: relative;
  b {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    pointer-events: none;
    span {
      display: block;
      position: absolute;
      top: -12px;
      left: -12px;
      background-color: #e73c36;
      border-radius: 50%;
      opacity: 0;
      width: 24px;
      height: 24px;
      pointer-events: none;
    }
  }
`

export default ({ customCss, name, illustration, logo, path }) => {

  const ref = useRef(null)
  const mask = useRef(null)

  const handleMouseEnter = e => {
    const el = mask.current;
    const { top, left } = ref.current.getBoundingClientRect();
    gsap.set(el, { x: e.clientX - left, y: e.clientY - top, opacity: 0.9 })
    gsap.set('#inner-cursor', { visibility: 'hidden' })
    gsap.fromTo(el, { scale: 0 }, { scale: 55, duration: 0.5 })
  }

  const handleMouseLeave = e => {
    const el = mask.current;
    const { top, left } = ref.current.getBoundingClientRect();
    gsap.set(el, { x: e.clientX - left, y: e.clientY - top, opacity: 0.9 })
    gsap.set('#inner-cursor', { visibility: 'visible' })
    gsap.to(el, 0.5, { scale: 0 })
  }

  // const timeline = useTimeline({ paused: true }, tl => {
  // })

  return (
    <div css={[style, customCss]}>
      <div tabIndex={0} role="button" ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <TransitionLink
          to={path}
          entry={{
            trigger: ({ exit, node }) => {
              gsap.fromTo(node, { opacity: 0 }, { duration: 1, opacity: 1 })
            }
          }}
          exit={{
            zIndex: 1,
            trigger: ({ exit, node }) => {
              gsap.fromTo(node, { opacity: 1 }, { duration: 1, opacity: 0 })
            }
          }}
          preventScrollJump>
          <Img
            fluid={illustration}
            loading="eager"
          />
          {/* <Img
          fluid={logo}
          style={{ position: 'absolute', left: '50%', right: '50%', transform: 'translate(-50%, -50%)' }}
        /> */}
        </TransitionLink>
        <b><span ref={mask}></span></b>
      </div>
      <div css={css`
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        font-weight: bold;
        transform: translateY(0.8em);
        font-size: 1.85em;
        opacity: 1;
      `}>{name}</div>
    </div>
  )
}