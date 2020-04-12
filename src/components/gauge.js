import React, { useEffect, useRef, useState } from "react"
import { css } from "@emotion/core"
import { gsap } from "gsap"
import CustomEase from "gsap/CustomEase3"
gsap.registerPlugin(CustomEase)

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
  const tl = gsap.timeline({paused: true, delay: Math.random() * 1.2})

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
        strokeDasharray: length / 52,
      },
      {
        strokeDasharray: length,
        duration: 1.5,
        strokeDashoffset: length - (length / 100) * value,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.02306,0.06514 0.04477,0.09372 0.06462,0.11986 0.08878,0.13617 0.11753,0.15474 0.13677,0.16717 0.15307,0.17237 0.17638,0.17874 0.25684,0.20073 0.30736,0.20723 0.38986,0.22917 0.4303,0.23992 0.4547,0.24648 0.49202,0.26266 0.53621,0.28183 0.5649,0.2958 0.60454,0.32227 0.64488,0.3492 0.67446,0.37079 0.7046,0.40461 0.72395,0.42631 0.73537,0.44887 0.74348,0.47814 0.77378,0.58749 0.77963,0.6664 0.80913,0.78186 0.82105,0.82851 0.83238,0.85807 0.8513,0.90012 0.85994,0.91931 0.86992,0.93142 0.88365,0.94743 0.89424,0.95976 0.9035,0.96756 0.91687,0.97654 0.92842,0.98428 0.93804,0.98908 0.95133,0.99283 0.96849,0.99768 1,1 1,1 ")
      }
    )
    tl.to(animatedValue, 0.3, {
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
              // stroke-dasharray: ${length};
              // stroke-dashoffset: ${length};
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
