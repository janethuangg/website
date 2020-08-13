import React from "react"
import "fontsource-roboto"
import Layout from "../components/layout"
import Landing from "./Landing"
import Container from "../components/Containers/Container"
import About from "./About"
import Project from "./Project"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Janet Huang</title>
      <link
        rel="icon"
        href={require("../images/logo.svg")}
        type="image"
        sizes="16x16"
      />
    </Helmet>
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
  </>
)

export default IndexPage
