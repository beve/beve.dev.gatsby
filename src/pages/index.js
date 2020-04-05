import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Jauge from "../components/jauge"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {/* <Jauge value={90} label="React" />
      <Jauge value={70} label="Angular" />
      <Jauge value={80} label="Vanilla JS" /> */}
    </Grid>
  </Layout>
)

export default IndexPage
