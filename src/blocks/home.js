import React from "react"

import SEO from "../components/seo"

import Landing from "../blocks/landing"
import Skills from "../blocks/skills"
import Customers from "../blocks/customers"
import Projects from "../blocks/projects"
import Contact from "../blocks/contact"
// import Project from "../blocks/project"

export default ({ location }) => {
  const project = location.pathname.match(/^\/project\/([a-z]+)$/)
  return (
    <>
      <SEO title="Accueil" />
      <Landing />
      <Skills />
      <Projects />
      <Customers />
      <Contact />
      {/* {!!project && (
        <Project />
      )} */}
    </>)
}