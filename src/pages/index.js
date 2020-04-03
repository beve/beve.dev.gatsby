import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Jauge from "../components/jauge"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <Jauge value={90} label="React" />
      <Jauge value={20} label="Angular" />
      <Jauge value={30} label="Vanilla JS" />
    </Grid>
  </Layout>
)

export default IndexPage
