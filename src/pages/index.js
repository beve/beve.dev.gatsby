import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../blocks/landing"
import Skills from "../blocks/skills"
import Customers from "../blocks/customers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Landing />
      <Skills />
      <Customers />
  </Layout>
)

export default IndexPage
