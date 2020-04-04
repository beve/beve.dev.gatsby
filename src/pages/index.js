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
      <a href="/" data-cursor="around"
        css={(theme) =>
          css`
            &:hover {
              color: ${theme.colors.primary};
              transition: color 0.4s;
            }
          `
        }
        style={{ position: "absolute", top: "50%", left: "50%", padding: '20px' }}
      >
        around
      </a>
      <a href="/" data-cursor="big"
        css={(theme) =>
          css`
            &:hover {
              color: ${theme.colors.primary};
              transition: color 0.4s;
            }
          `
        }
        style={{ position: "absolute", top: "60%", left: "50%", padding: '20px' }}
      >
        big
      </a>
    </Grid>
  </Layout>
)

export default IndexPage
