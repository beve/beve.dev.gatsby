import React, { useState } from "react"
import { css } from "@emotion/core"
import { gsap } from "gsap"
import useIntersection from "../hooks/useIntersection"
import useTimeline from "../hooks/useTimeline"
import CustomEase from "gsap/CustomEase3"
import DrawSVG from "gsap/DrawSVGPlugin3"
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(DrawSVG)

const Gauge = ({
  color,
  customCss,
  value,
  radius = 58,
  strokeWidth = 15,
  label = "React",
}) => {

  const [computedAnimatedValue, set] = useState(0)

  const [ref, observer] = useIntersection(() => { timeline.current.play() })

  const timeline = useTimeline({ paused: true, delay: Math.random() * .5 },
    (tl) => {
      const animatedValue = { val: 0 }
      const el = ref.current.querySelector('circle');
      gsap.set(el, { drawSVG: 0 })
      tl.to(el, .8, { drawSVG: `${value}%` })
      tl.to(animatedValue, 0.3, {
        val: value,
        roundProps: "val",
        onUpdate: () => {
          set(animatedValue.val)
        },
        onComplete: () => {
          observer.current.disconnect()
        }
      }, '<')
    }
  )

  return (
    <svg ref={ref} css={customCss} viewBox={`0 0 ${(radius * 2 + strokeWidth) * 1.5} ${(radius * 2 + strokeWidth) * 1.5}`}>
      <circle
        cx={(radius + strokeWidth / 2) * 1.5}
        cy={radius + strokeWidth / 2}
        r={radius}
        css={(theme) =>
          css`
              stroke: ${color || theme.colors.primary};
              stroke-width: ${strokeWidth}px;
              fill: none;
            `
        }
      />
      <text
        x="50%"
        y="35%"
        textAnchor="middle"
        dx="-.2em"
        dy=".3em"
        css={(theme) => css`
            stroke-width: 0.5px;
            font-size: 1.6em;
            stroke: ${color || theme.colors.grey};
          `}
      >
        {computedAnimatedValue}
      </text>
      <text
        x="50%"
        y="35%"
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
      <text
        x="50%"
        y="85%"
        textAnchor="middle"
        css={(theme) => css`
              stroke-width: 0.5px;
              font-weight: 600;
              font-size: 1.3em;
              stroke: ${theme.colors.grey};
            `}
      >
        {label}
      </text>
    </svg>
  )
}

export default Gauge
