import React from "react"
import { Heading, Name, Subtitle } from "../components/Heading/HeadStyle"
import { Image } from "../components/shared/Image"
import { useStaticQuery, graphql } from "gatsby"

const Landing = () => {
  return (
    <Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Name>Janet Huang</Name>
        <Subtitle>
          "Huang" directly translates to yellow, a color I associate with warmth
          + happiness
        </Subtitle>
        <Image height="33vh" src={require("../images/tonton.gif")} />
      </div>
    </Heading>
  )
}
export default Landing
