import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { css } from "@emotion/core"

const Cursor = ({ cursorSize = 18, hideCursor = true }) => {
  const innerCursor = useRef()
  const outerCursor = useRef()
  const mousePosition = useRef({ x: 0, y: 0 })
  const lockOuter = useRef(false)
  const hovered = useRef(false)
  const cursorOuterRatio = 3
  const cursorOuterSize = cursorSize - 2;
  const cursorOuterSizeBig = cursorSize * cursorOuterRatio;
    const bigCursorTL = gsap.timeline({ paused: true, defaults: { ease: 'linear' } })
    const outerCursorTL = gsap.timeline({ paused: true, defaults: { ease: 'linear' } })

  useEffect(() => {
    // Hide main cursor
    if (hideCursor) {
      document.body.style.cursor = "none"
    }
    // Main loop
    const renderCursor = () => {
      // Set inner cursor position
      const { x: mouseX, y: mouseY } = mousePosition.current;
      gsap.set(innerCursor.current, {
        x: mouseX, y: mouseY
      })
      if (!lockOuter.current) {
        gsap.set(outerCursor.current, {
          x: mouseX,
          y: mouseY,
        })
      }
      if (hovered.current) {
        gsap.set(outerCursor.current, {
          x: `-=${cursorOuterSizeBig / 2 - cursorSize / 2 + 1}`,
          y: `-=${cursorOuterSizeBig / 2 - cursorSize / 2 + 1}`,
        })
      }
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
  }, [cursorSize, hideCursor, cursorOuterSizeBig])



  useEffect(() => {
    // At the end of animation, reverse outer cursor size
    bigCursorTL.eventCallback('onReverseComplete', () => {
      // Resize outer circle to original size
      gsap.set(outerCursor.current, { width: cursorOuterSize, height: cursorOuterSize });
      hovered.current = false;
    })
    bigCursorTL.fromTo(innerCursor.current, { scale: 1, opacity: 1 }, {
      duration: .2,
      scale: 3,
      opacity: .3,
    })
    bigCursorTL.fromTo(outerCursor.current,
      {
        scale: 1,
      },
      {
        duration: .2,
        opacity: 1,
      }, '<.2')
    const surroundItem = (e) => {
      hovered.current = true
      bigCursorTL.seek(0, false)
      outerCursorTL.seek(0, false)
      // Resize outer circle without animation for performance 
      gsap.set(outerCursor.current, { width: cursorOuterSizeBig, height: cursorOuterSizeBig });
      bigCursorTL.play()
    }
    const leaveItem = (e) => {
      bigCursorTL.reverse()
    }
    // Foreach links
    document.querySelectorAll('[data-cursor="big"').forEach((item) => {
      item.addEventListener("mouseenter", surroundItem)
      item.addEventListener("mouseleave", leaveItem)
    })
  }, [])

  useEffect(() => {
    outerCursorTL.fromTo(
      innerCursor.current,
      { 
        scale: 1, 
        opacity: 1 
      }, {
        duration: 0.3,
        scale: 3,
        opacity: .1,
      })
    const surroundItem = (e) => {
      // Set other animation to beginning
      bigCursorTL.seek(0, false)
      outerCursorTL.seek(0, false)
      const el = e.target
      const { top, left, width, height } = el.getBoundingClientRect()
      gsap.to(outerCursor.current, .3, {
        x: left + width / 2 - cursorSize / 2,
        y: top + height / 2 - cursorSize / 2,
      })
      outerCursorTL.fromTo(outerCursor.current, {
        height: cursorSize,
        width: cursorSize,
        opacity: 0,
        scale: 1,
      }, {
        duration: 0.3,
        opacity: 1,
        scale: 5,
      }, '<')
      lockOuter.current = true
      outerCursorTL.play()
    }
    const leaveItem = (e) => {
      outerCursorTL.reverse()
      lockOuter.current = false
    }
    // Foreach links
    document.querySelectorAll('[data-cursor="around"').forEach((item) => {
      item.addEventListener("mouseenter", surroundItem)
      item.addEventListener("mouseleave", leaveItem)
    })
  }, [])

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
          border-radius: 50%;
          background-color: ${theme.colors.primary};
          pointer-events: none;
          mix-blend-mode: difference;
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
          width: ${cursorOuterSize}px;
          height: ${cursorOuterSize}px;
          background-color: red;
          border-radius: 50%;
          border: 1px solid ${theme.colors.primary};
          pointer-events: none;
          background-color: transparent;
          mix-blend-mode: difference;
        `}
      ></div>
    </>
  )
}

export default Cursor
