import React, { useRef } from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from "gsap"

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
  const maskRef = useRef(null)
  const logoRef = useRef(null)

  const timeline = useRef(gsap.timeline())

  const handleMouseEnter = (e) => {
    const tl = timeline.current;
    tl.clear();
    const el = maskRef.current
    const { top, left, height } = ref.current.getBoundingClientRect()
    const scale = height / 8 // 12 is half cursor size
    const imageRef = logoRef.current.imageRef.current
    const imageWrapperRef = imageRef.parentNode.parentNode;
    gsap.set(el, { x: e.clientX - left, y: e.clientY - top, opacity: 0.9 })
    gsap.set("#inner-cursor", { visibility: "hidden" })
    tl.fromTo(el, { scale: 0 }, { scale, duration: 0.5 })
    tl.to(imageWrapperRef, 0.5, { opacity: 1 }, "<.1")
  }

  const handleMouseLeave = (e) => {
    const tl = timeline.current;
    tl.clear();
    const el = maskRef.current
    const { top, left } = ref.current.getBoundingClientRect()
    const imageRef = logoRef.current.imageRef.current
    const imageWrapperRef = imageRef.parentNode.parentNode;
    gsap.set(el, { x: e.clientX - left, y: e.clientY - top, opacity: 0.9 })
    gsap.set("#inner-cursor", { visibility: "visible" })
    tl.to(el, 0.5, { scale: 0 })
    tl.to(imageWrapperRef, 0.3, { opacity: 0 }, "<")
  }

  const handleClick = () => {
    gsap.to("#inner-cursor", 0.5, { visibility: "visible" })
  }

  return (
    <div css={[style, customCss]}>
      <div
        tabIndex={0}
        role="button"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleClick}
        onClick={handleClick}
      >
        <TransitionLink
          to={path}
          entry={{
            trigger: ({ exit, node }) => {
              gsap.fromTo(node, { opacity: 0 }, { duration: 1, opacity: 1 })
            },
          }}
          exit={{
            zIndex: 1,
            trigger: ({ exit, node }) => {
              gsap.fromTo(node, { opacity: 1 }, { duration: 1, opacity: 0 })
            },
          }}
          preventScrollJump
        >
          <Img fluid={illustration} loading="eager" />
          <Img
            ref={logoRef}
            fluid={logo}
            loading="eager"
            style={{
              position: "absolute",
              zIndex: 1,
              width: "60%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
          />
        </TransitionLink>
        <b>
          <span ref={maskRef}></span>
        </b>
      </div>
      <div
        css={css`
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          font-weight: bold;
          transform: translateY(0.8em);
          font-size: 1.85em;
          opacity: 1;
          pointer-events: none;
        `}
      >
        {name}
      </div>
    </div>
  )
}
