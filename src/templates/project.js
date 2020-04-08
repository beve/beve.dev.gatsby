import React from "react"
import { css } from '@emotion/core'

import SEO from "../components/seo"
import Grid from "../components/grid"
import Layout from "../components/layout"

const container = css`
  position: fixed;
  top: 0;
  bottom: 0; 
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.2);
  pointer-events: none;
  z-index: 9;
`

const ProjectPage = () => (
  <>
    <SEO title="Projets" />
    <Layout>
      <Grid drawCols={12}>Projet Component</Grid>
    </Layout>
  </>
)

export default ProjectPage