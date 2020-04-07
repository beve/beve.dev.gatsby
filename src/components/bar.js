import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import gasp from 'gsap'

export default ({ value, height = 10, width = 410, label = 'Arduino' }) => {

  useEffect(() => {

  }, [])

  const halfHeight = height / 2;
  const computedValue = width * value / 100;

  const rect = theme => css`
    path {
      stroke-linecap: round;
      stroke-width: ${height}px;
      stroke-dashoffect: 0;
      &:first-child {
        stroke: ${theme.colors.grid};
      }
      &:last-child {
        stroke: ${theme.colors.primary};
      }
    }
  `

  return (
    <svg css={rect} viewBox={`0 0 ${width + height + 50} 93`}>
      <defs>
        <path id="labelPath" d={`M${halfHeight},${50 - halfHeight} H${computedValue + 120}`} />
      </defs>
      <g fill="none">
        <path d={`M${halfHeight},${50 - halfHeight} H${width + halfHeight}`} />
        <path d={`M${halfHeight},${50 - halfHeight} H${computedValue}`} />
      </g>
      <text 
      dy="-22"
      css={(theme) => css`
        stroke-width: 0.5px;
        font-weight: 300;
        font-size: 1.9em;
        stroke: ${theme.colors.grey};
        `}>
        <textPath href="#labelPath" startOffset={computedValue - 24}>{value}</textPath>
      </text>
      <text
        dy="-31"
        css={(theme) => css`
            stroke-width: 0.5px;
            font-weight: 300;
            font-size: 1em;
            stroke: ${theme.colors.grey};
          `}
      >
        <textPath href="#labelPath" startOffset={computedValue + 12}>%</textPath>
        </text>
      <text
        dy="-22"
        dx="-2"
        css={(theme) => css`
            stroke-width: 0.5px;
            font-weight: 600;
            font-size: 1.2em;
            stroke: ${theme.colors.grey};
          `}
          >
        <textPath href="#labelPath" startOffset={0}>{label}</textPath>
      </text>
    </svg >
  )

}