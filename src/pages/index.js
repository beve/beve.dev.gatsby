import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../blocks/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Landing />
  </Layout>
)

export default IndexPage
