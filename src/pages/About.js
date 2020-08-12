import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { List, ListItem, ImageWrapper } from "../components/AboutStyle"
import { Section, TitleComponent, SubSection } from "../components/Common"
import { useStaticQuery, graphql } from "gatsby"
import { Image } from "../components/shared/Image"

const About = () => {
  return (
    <Section>
      <TitleComponent>About</TitleComponent>
      <SubSection>
        <TextWrapper>
          <Text>
            Hi there! I'm Janet, a rising junior at NYU majoring in Business
            (Statistics) and Computer Science. I spent this summer interning at
            Facebook as a Data Engineer, and I'm looking to explore a career in
            software engineering next.
            <List>
              <ListItem>
                <b>Why SWE?</b> I want to work on building the user-facing
                products, not just the data products supporting them. Moreover,
                I enjoy learning about new technologies and frameworks ッ
              </ListItem>
              <ListItem>
                <b>What's coming up?</b> This fall, I'll be serving as a
                Teaching Fellow for both sessions of an applied data science
                course called{" "}
                <a href="https://github.com/asiegman16/NYU_ProjectsinProgramming_Fall2020">
                  Projects in Programming
                </a>
                . I'll also be taking over as the Webmaster for{" "}
                <a href="http://sternbac.org/">this</a> website and working on
                some new features there.
              </ListItem>
              <ListItem>
                <b>What's for fun?</b> Recently, I've been documenting my
                macaron-making journey and experimenting with creme brûlée
                cooking methods.
              </ListItem>
            </List>
            For any other info, feel free to reach out to me via{" "}
            <a href="mailto:janet.huang@stern.nyu.edu">email</a>!
          </Text>
        </TextWrapper>
        <ImageWrapper>
          <Image
            width="33vw"
            style={{ borderRadius: "10%", marginTop: "-5%" }}
            src={require("../images/janet.jpg")}
          />
        </ImageWrapper>
      </SubSection>
    </Section>
  )
}
export default About
