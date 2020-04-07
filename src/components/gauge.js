import React, { useEffect, useRef, useState } from "react"
import { css } from "@emotion/core"
import { gsap } from "gsap"

const Gauge = ({
  color,
  customCss,
  value,
  radius = 58,
  strokeWidth = 15,
  label = "React",
}) => {

  const ref = useRef()
  const [v, set] = useState(0)
  const length = 2 * Math.PI * radius
  
  useEffect(() => {

    const animatedValue = { val: 0 }
    const tl = gsap.timeline({paused: true, delay: Math.random() * 1.5})

    tl.fromTo(
      ref.current,
      {
        opacity: 0.2,
      },
      {
        duration: 1,
        strokeDashoffset: length - (length / 100) * value,
        opacity: 1,
        ease: "easeOut"
      }
    )
    tl.to(animatedValue, 1, {
      val: value,
      roundProps: "val",
      onUpdate: () => {
        set(animatedValue.val)
      },
    }, '<')

    tl.play()
  }, [length, value])

  return (
    <div css={customCss}>
      <svg viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}>
        <circle
          ref={ref}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          css={(theme) =>
            css`
              stroke: ${color || theme.colors.primary};
              stroke-width: ${strokeWidth}px;
              fill: none;
              stroke-dasharray: ${length};
              stroke-dashoffset: ${length};
            `
          }
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dx="-.2em"
          dy=".3em"
          css={(theme) => css`
            stroke-width: 0.5px;
            font-size: 1.7em;
            stroke: ${color || theme.colors.grey};
          `}
        >
          {v}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dx="1.2em"
          css={(theme) => css`
            stroke-width: 0.5px;
            font-size: 0.9em;
            stroke: ${color || theme.colors.grey};
          `}
        >
          %
        </text>
      </svg>
      <div
        css={css`
          text-align: center;
          font-weight: bold;
          margin-top: 10px;
        `}
      >
        {label}
      </div>
    </div>
  )
}

export default Gauge
