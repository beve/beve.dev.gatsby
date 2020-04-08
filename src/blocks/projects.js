import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import Grid from '../components/grid'
import Project from '../components/project'

const gridCss = css`
  grid-template-rows: repeat(6, 1fr);
`

const Projects = ({ data }) => {
  return (
    <Grid gridCss={gridCss} drawCols={12}>
      {data.allDatoCmsProject.edges.map((project, i) => {
        const row = [1, 2, 4, 5][i % 4]
        const col = [6, 1][i % 2]
        return (
          <Project
            key={project.node.id}
            name={project.node.name}
            illustration={project.node.illustration.fluid}
            logo={project.node.logo.fluid}
            customCss={css`grid-row: ${row} / span 2; grid-column: ${col} / span 5`}
          />
        )
      }
      )}
    </Grid>
  )
}

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
      query Projects {
        allDatoCmsProject(filter: {locale: {eq: "fr"}, meta: {status: {eq: "published"}}}) {
          edges {
            node {
              id
              name
              illustration {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
              logo {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
      `}
      render={data => <Projects data={data} {...props} />}
    />
  )
}