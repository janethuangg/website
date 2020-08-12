import React from "react"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, Section, SubSection } from "../components/Common"
import { List, ListItem, ImageWrapper } from "../components/AboutStyle"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { Image } from "../components/shared/Image"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 2.5vh;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 80,
  },
}))

const Project = () => {
  const classes = useStyles()

  return (
    <Section>
      <TitleComponent>Projects</TitleComponent>
      <SubSection>
        <Grid>
          <ProjectCard
            title="Chikin Tinder"
            subtitle="React Native App"
            image="icon.png"
            description='swipe your way to answering "where should we eat"'
          ></ProjectCard>
          <ProjectCard
            title="Leeting Logs"
            subtitle="MERN Website"
            image="leet.png"
            description="organize & analyze your technical interview prep"
          ></ProjectCard>
          <ProjectCard
            title="Patissier Pal"
            subtitle="Flask Website"
            image="baking.png"
            description="figure out which YouTube baking vids you can follow"
          ></ProjectCard>
          <ProjectCard
            title="Kickstarter"
            subtitle="Jupyter Notebook"
            image="kick.png"
            description="predict whether your Kickstarter campaign will succeed"
          ></ProjectCard>
          <ProjectCard
            title="Take Three"
            subtitle="Figma Prototype"
            image="celeb.png"
            description="celebrate your daily small wins to beat impostor syndrome"
          ></ProjectCard>
        </Grid>
      </SubSection>
    </Section>
  )
}
export default Project
