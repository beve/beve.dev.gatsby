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
      <Jauge value={90} label="React" />
      <Jauge value={70} label="Angular" />
      <Jauge value={80} label="Vanilla JS" />
      <a data-cursor="big"
        css={(theme) =>
          css`
            &:hover {
              color: ${theme.colors.primary};
              transition: color 0.4s;
            }
          `
        }
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        yolo
      </a>
    </Grid>
  </Layout>
)

export default IndexPage
