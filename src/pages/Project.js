import React from "react"
import styled from "styled-components"
import Card from "../components/shared/Card"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, Section, SubSection } from "../components/Common"
import { List, ListItem, ImageWrapper } from "../components/AboutStyle"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { Image } from "../components/shared/Image"
const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Project = () => {
  return (
    <Section>
      <TitleComponent>Project</TitleComponent>
      <SubSection>
        <TextWrapper>
          <Text>
            Hi there! I'm Janet, a rising junior at NYU majoring in Business
            (Statistics) and Computer Science. I spent this summer interning at
            Facebook as a Data Engineer, and I'm looking to explore a career in
            software engineering next.
          </Text>
        </TextWrapper>
      </SubSection>
    </Section>
  )
}
export default Project
