import styled from "styled-components"
import { breakpoints } from "./Media"

export const Text = styled.div`
  font-size: 1.2rem;
  color: #2d2d2d;
  font-family: "Nunito";
  font-weight: normal;
  line-height: 1.4rem;
  padding: 0 6rem;
  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 1.25rem;
    padding: 0 3rem;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  max-width: 100%;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 100%;
    align-items: center;
    text-align: left;
  }
`

export const StyledText = styled.h4`
  font-size: 0.9rem;
  margin-left: 5rem;
  opacity: 0.7;
`
