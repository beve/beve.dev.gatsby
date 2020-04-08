import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Home from "../blocks/home"
import NotFoundPage from "./404"

const IndexPage = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Home path="/p/*" />
      <Home path="/project/*" />
      <NotFoundPage default />
    </Router>
  </Layout>
)

export default IndexPage
