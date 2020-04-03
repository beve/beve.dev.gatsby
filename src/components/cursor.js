import React, { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { css } from "@emotion/core"

const Cursor = ({ cursorSize = 24, hideCursor = true }) => {
  const innerCursor = useRef()
  const outerCursor = useRef()
  const mousePosition = useRef({ x: 0, y: 0 })
  const lockOuter = useRef(false)

  useEffect(() => {
    // Hide main cursor
    if (hideCursor) {
      document.body.style.cursor = "none"
    }
    // Main loop
    const renderCursor = () => {
      // Set inner cursor position
      gsap.set(innerCursor.current, {
        ...mousePosition.current,
      })
      // Set outer cursor position
      // if (!lockOuter.current) {
        // gsap.set(outerCursor.current, {
          // ...mousePosition.current,
        // })
      // } else {
        gsap.set(outerCursor.current, {
          x: mousePosition.current.x - cursorSize,
          y: mousePosition.current.y - cursorSize,
        })
      // }
      requestAnimationFrame(renderCursor)
    }
    requestAnimationFrame(renderCursor)
    // set event listeners
    const setMousePosition = (e) => {
      mousePosition.current = {
        x: e.clientX - cursorSize / 2,
        y: e.clientY - cursorSize / 2,
      }
    }
    // Event listeners
    document.addEventListener("mousemove", setMousePosition)
    return () => {
      document.removeEventListener("mousemove", setMousePosition)
    }
  }, [])

  useEffect(() => {
    // const el = e.target
    // const { x, y, width, height } = el.getBoundingClientRect()
    // const size = Math.max(width, height)
    const tl = gsap.timeline({ paused: true })
    tl.to(innerCursor.current, 0.2, {
      scale: 3,
      opacity: 0.1,
    })
    tl.to(
      outerCursor.current,
      0.2,
      {
        opacity: 0.5,
      },
    )
    const surroundItem = (e) => {
      lockOuter.current = true
      tl.play()
    }
    const leaveItem = (e) => {
      tl.reverse()
    }
    // Foreach links
    document.querySelectorAll('[data-cursor="big"').forEach((item) => {
      item.addEventListener("mouseenter", surroundItem)
      item.addEventListener("mouseleave", leaveItem)
    })
  })

  return (
    <>
      <div
        ref={innerCursor}
        css={(theme) => css`
          position: fixed;
          z-index: 10;
          top: 0;
          left: 0;
          width: ${cursorSize}px;
          height: ${cursorSize}px;
          pointer-events: none;
          border-radius: 50%;
          background-color: ${theme.colors.primary};
        `}
      ></div>
      <div
        ref={outerCursor}
        css={(theme) => css`
          position: fixed;
          z-index: 10;
          top: 0;
          left: 0;
          opacity: 0;
          width: ${cursorSize * 3}px;
          height: ${cursorSize * 3}px;
          pointer-events: none;
          border-radius: 50%;
          border: 1px solid ${theme.colors.primary};
          background-color: transparent;
        `}
      ></div>
    </>
  )
}

export default Cursor
