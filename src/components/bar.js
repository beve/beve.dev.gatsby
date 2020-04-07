import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import gasp from 'gsap'

export default ({ value, height = 10 }) => {

  useEffect(() => {

  }, [])

  var size = 410;
  var halfHeight = height/2;

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
    <svg css={rect} width={`${size+height}`}>
      <g fill="none">
        <path d={`M${halfHeight} ${halfHeight} H${size+halfHeight}`} />
        <path d={`M${halfHeight} ${halfHeight} H${size/2+halfHeight}`} />
      </g>
    </svg>
  )

}