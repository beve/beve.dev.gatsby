import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Grid from '../components/grid'

const grid = css`
  grid-template-rows: 380px 160px 160px 190px;
`

const title = css`
  grid-row: 1;
  grid-column: 2 / -1;
  font-size: 3.5em;
  letter-spacing: 1px;
  align-self: end;
  font-weight: 700;
  padding-bottom: 65px;
`

const Customers = ({ data }) => {
  return (
    <Grid gridCss={grid} drawCols={14}>
      <div css={title}>
        Clients
      </div>
      {data.allFile.edges.map(image => {
        const [_, row, col] = image.node.name.match(/^[0-9]{2}-([0-9]+)-([0-9]+).*/) // eslint-disable-line
        return (
          <div
            key={`${row}-${col}`}
            css={css`max-width: 100%; width: 90%; grid-row:${row}; grid-column:${col} / span 2; align-self: center; justify-self: center;`}
          >
            <Img
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