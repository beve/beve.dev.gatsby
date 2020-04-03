import React, { useEffect, useRef, useState } from "react"
import { css } from "@emotion/core"
import { gsap } from "gsap"

const Jauge = ({
  color,
  value,
  radius = 42,
  strokeWidth = 10,
  label = "React",
}) => {

  const ref = useRef()
  const [v, set] = useState(0)
  const length = 2 * Math.PI * radius
  
  useEffect(() => {

    let animatedValue = { val: 0 }

    gsap.fromTo(
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
    gsap.to(animatedValue, 1, {
      val: value,
      roundProps: "val",
      onUpdate: () => {
        set(animatedValue.val)
      },
    })
  }, [length, value])

  return (
    <div>
      <svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
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
              stroke-linecap: round;
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
            font-size: 1.4em;
            stroke: ${color || theme.colors.grey};
          `}
        >
          {v}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="-.3em"
          dx="1.2em"
          css={(theme) => css`
            stroke-width: 0.5px;
            font-size: 0.7em;
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

export default Jauge
