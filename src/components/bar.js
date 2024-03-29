import React, { useRef, useState } from 'react'
import useIntersection from "../hooks/useIntersection"
import useTimeline from "../hooks/useTimeline"
import { css } from '@emotion/core'

export default ({ value, height = 10, width = 410, label = 'Arduino', color }) => {

  const halfHeight = height / 2;
  const computedValue = width * value / 100;
  const valRef = useRef()
  const pathRef = useRef()
  const [computedAnimatedValue, set] = useState(0)

  const [ref, observer] = useIntersection(() => { timeline.current.play() })

  const timeline = useTimeline({ paused: true, delay: Math.random() * .5 }, (tl) => {
    const animatedValue = { val: 0 }

    // Bar length
    tl.fromTo(
      pathRef.current,
      {
        opacity: 0.2,
      },
      {
        duration: 1,
        strokeDashoffset: width - (width / 100) * value,
        opacity: 1,
        ease: "easeOut"
      }
    )
    // Numbers
    tl.fromTo(
      valRef.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: "easeOut"
      }, '<'
    )
    // Val displayed (text)
    tl.to(animatedValue, 1, {
      val: value,
      roundProps: "val",
      onUpdate: () => {
        set(animatedValue.val)
      },
      onComplete: () => {
        // Animation complete disconnect observer
        observer.current.disconnect()
      }
    }, '<')
  })


  const svg = theme => css`
    path {
      stroke-linecap: round;
      stroke-width: ${height}px;
      &:first-of-type {
        stroke: ${color || theme.colors.grid};
      }
      &:last-of-type {
        stroke: ${color || theme.colors.primary};
        stroke-dasharray: ${width};
        stroke-dashoffset: ${width};
      }
    }
  `

  return (
    <svg ref={ref} css={svg} viewBox={`0 0 ${width + height} 93`}>
      <defs>
        <path id="labelPath" d={`M${halfHeight},${50 - halfHeight} H${computedValue + 120}`} />
      </defs>
      <g fill="none">
        <path d={`M${halfHeight},${50 - halfHeight} H${width + halfHeight}`} />
        <path ref={pathRef} d={`M${halfHeight},${50 - halfHeight} H${width + halfHeight}`} />
      </g>
      <g ref={valRef} css={css`opacity: 0`}>
        <text
          dy="-22"
          css={(theme) => css`
          stroke-width: 0.5px;
          font-weight: 300;
          font-size: 1.6em;
          stroke: ${theme.colors.grey};
          `}>
          <textPath href="#labelPath" startOffset={computedValue - 20}>{computedAnimatedValue}</textPath>
        </text>
        <text
          dy="-31"
          css={(theme) => css`
              stroke-width: 0.5px;
              font-weight: 300;
              font-size: 0.9em;
              stroke: ${theme.colors.grey};
            `}
        >
          <textPath href="#labelPath" startOffset={computedValue + 12}>%</textPath>
        </text>
      </g>
      <text
        dy="-22"
        dx="-2"
        css={(theme) => css`
            stroke-width: 0.5px;
            font-weight: 600;
            font-size: 1.25em;
            stroke: ${theme.colors.grey};
          `}
      >
        <textPath href="#labelPath" startOffset={0}>{label}</textPath>
      </text>
    </svg >
  )

}