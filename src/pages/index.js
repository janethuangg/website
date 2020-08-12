import React from "react"
import "fontsource-roboto"
import Layout from "../components/layout"
import Landing from "./Landing"
import Container from "../components/Containers/Container"
import About from "./About"
import Project from "./Project"

const IndexPage = () => (
  <Layout>
    <Landing />
    <Container>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
