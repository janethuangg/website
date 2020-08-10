import styled from "styled-components"
import { breakpoints } from "./shared/Media"

export const Section = styled.div`
  width: 100%;
  height: 100vh;
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
  height: 75vh;
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
  text-align: left;
  @media (max-width: ${breakpoints.mobileMax}) {
    text-align: center;
  }
`
