import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Grid from "../components/grid"
import HomeProject from "../components/homeProject"

const gridCss = css`
  grid-template-rows: repeat(6, 1fr);
`

const title = css`
  grid-row: 1;
  grid-column: 2 / -1;
  font-size: 3.5em;
  letter-spacing: 1px;
  align-self: end;
  font-weight: 700;
  padding-bottom: 55px;
`

const Projects = ({ data }) => {
  return (
    <Grid gridCss={gridCss} drawCols={14}>
      <div css={title}>Projets</div>
      {data.allDatoCmsProject.edges.map((project, i) => {
        const row = [1, 2, 4, 5][i % 4]
        const col = [8, 3][i % 2]
        const path = `/projet/${project.node.name
          .replace(" ", "-")
          .toLowerCase()}`
        return (
          <HomeProject
            key={project.node.id}
            name={project.node.name}
            illustration={project.node.illustration.fluid}
            logo={project.node.logo.fluid}
            id={project.node.id}
            path={path}
            customCss={css`
              grid-row: ${row} / span 2;
              grid-column: ${col} / span 5;
            `}
          />
        )
      })}
    </Grid>
  )
}

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query Projects {
          allDatoCmsProject(
            filter: {
              locale: { eq: "fr" }
              meta: { status: { eq: "published" } }
            },
            sort: {fields: order, order: ASC}
          ) {
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
      render={(data) => <Projects data={data} {...props} />}
    />
  )
}
