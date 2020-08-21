import styled from "styled-components"
import { breakpoints } from "../shared/Media"

export const Heading = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -15vh;
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
export const Name = styled.h1`
  font-size: 4rem;
  color: #2d2d2d;
  font-family: "Nunito";
  font-weight: 600;
  text-align: center;
  margin-bottom: 0;
`
export const Subtitle = styled.h3`
  font-size: 1.3rem;
  color: #2d2d2d;
  font-family: "Nunito";
  opacity: 0.8;
  font-weight: 400;
  text-align: center;
  width: 80%;
`
