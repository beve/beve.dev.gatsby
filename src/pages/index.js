import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../blocks/landing"
import Skills from "../blocks/skills"
import Customers from "../blocks/customers"
import Projects from "../blocks/projects"
import Contact from "../blocks/contact"
import Project from "../blocks/project"

const IndexPage = () => (
  <Layout>
    <Router>
      <Project path="/project/yolo" />
    </Router>
    <SEO title="Accueil" />
    <Landing />
    <Skills />
    <Projects />
    <Customers />
    <Contact />
  </Layout>
)

export default IndexPage
