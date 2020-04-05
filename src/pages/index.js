import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../blocks/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div css={css`min-height: 2000px;background-color: #f0f0f0;`}></div>
      <Landing />
  </Layout>
)

export default IndexPage
