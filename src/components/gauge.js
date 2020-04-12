import React, { useEffect, useRef, useState, useCallback } from "react"
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
  const [computedAnimatedValue, set] = useState(0)
  const length = 2 * Math.PI * radius
  const tl = gsap.timeline({paused: true, delay: Math.random() * .5})

  const setObserver = (target) => {
    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.play()
        }
      });
    };
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target)
  }

  const setAnimation = () => {
    const animatedValue = { val: 0 }

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
  }
  
  useEffect(() => {

    setAnimation();
    setObserver(ref.current);

    return (() => {
      tl.clear()
    })
  }, [length, value])

  // useEffect(() => {
  //   console.log(!!mounted);
  // }, [mounted])

  return (
      <svg css={customCss} ref={ref} viewBox={`0 0 ${(radius * 2 + strokeWidth) * 1.5} ${(radius * 2 + strokeWidth) * 1.5}`}>
        <circle
          ref={ref}
          cx={(radius + strokeWidth / 2) * 1.5}
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
