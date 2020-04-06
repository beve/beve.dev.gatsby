import React from 'react'
import { css } from '@emotion/core'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import Grid from '../components/grid'

const grid = css`
  grid-template-rows: 200px 200px 200px;
`

const cols = css``

const Customers = ({ data }) => {
  return (
    <Grid gridCss={grid} drawCols={12} colsCss={cols}>
      {data.allFile.edges.forEach(edge => {
        const [_, row, col] = edge.node.name.match(/^[0-9]{2}-([0-9]{1})-([0-9]{1}).*/)
        console.log(row, col);
        return <Img fluid={edge.node.childImageSharp.fluid} css={css`width: 200px;height: 200px`}/>
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
                    ...GatsbyImageSharpFluid
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