import styled from "styled-components"
import { breakpoints } from "./shared/Media"


export const ImageWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 6rem;
  @media (max-width: ${breakpoints.mobileMax}) {
    justify-content: center;
    align-items: center;
  }
`
export const List = styled.ul`
  list-style-type: circle;
  list-style-position: outside;
`

export const ListItem = styled.li`
  margin-left: -1rem;
  margin-bottom: 0.5rem;
`
