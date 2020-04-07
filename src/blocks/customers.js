import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Grid from '../components/grid'

const grid = css`
  grid-template-rows: 210px 160px 160px 190px;
`

const title = css`
  position: relative;
  grid-row: 1;
  grid-column: 1;
  transform: translateX(-100%);
  align-self: center;
  height: 5.5em;
  & > div {
    position: absolute;
    font-size: 3.5em;
    letter-spacing: 1px;
    font-weight: 700
  }
`

const Customers = ({ data }) => {
  return (
    <Grid gridCss={grid} drawCols={12}>
      <div css={title}>
        <div>Clients</div>
      </div>
      {data.allFile.edges.map(image => {
        const [_, row, col] = image.node.name.match(/^[0-9]{2}-([0-9]{1})-([0-9]{1}).*/) // eslint-disable-line
        return (
          <div
            css={css`max-width: 100%; width: 90%; grid-row:${row}; grid-column:${col} / span 2; align-self: center; justify-self: center;`}
          >
            <Img
              key={`${row}-${col}`}
              fluid={image.node.childImageSharp.fluid}
              loading="eager"
              style={{maxHeight: '80px'}}
              imgStyle={{ objectFit: 'contain' }}
              alt="Logo" />
          </div>
        )
      })}
    </Grid>
  )
}

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(sort: {fields: name}, filter: {relativePath: {regex: "/logos/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
                name
              }
            }
          }
        }
    `}
      render={data => <Customers data={data} {...props} />}
    />
  )
}