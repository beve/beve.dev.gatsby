import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../blocks/landing"
import Skills from "../blocks/skills"
import Customers from "../blocks/customers"
import Projects from "../blocks/projects"
import Contact from "../blocks/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Skills />
    <Projects />
    <Customers />
    <Contact />
  </Layout>
)

export default IndexPage
