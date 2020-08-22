import styled from "styled-components"
import { breakpoints } from "./shared/Media"

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  @media (max-width: ${breakpoints.mobileMax}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const SubSection = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  @media (max-width: ${breakpoints.mobileMax}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const TitleComponent = styled.div`
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 400;
  margin-left: 5rem;
  margin-bottom: 1vh;
  text-align: center;
  text-decoration: underline #fcd864;
  text-underline-position: under;
  @media (max-width: ${breakpoints.mobileMax}) {
    align-self: center;
    margin-left: 0;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
`

export const ExtraImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  @media (max-width: ${breakpoints.mobileMax}) {
    display: none;
  }
`
export const Image = styled.img`
  max-width: 25%;
  border-radius: "100";
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 50%;
  }
`
