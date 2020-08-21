import React from "react"
import {
  NavWrapper,
  Navbar,
  Nav,
  NavItem,
  Item,
  NavBrand,
  NavLink,
} from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import ScrollIntoView from "react-scroll-into-view"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Navbar>
      <NavWrapper>
        <NavBrand>
          <img
            style={{
              minWidth: 100,
              width: "10%",
              marginLeft: 0,
              alignSelf: "center",
            }}
            src={require("../images/logo.svg")}
          ></img>
        </NavBrand>
        {/* <NavBrand>{data.site.siteMetadata.author}</NavBrand> */}
        <Nav>
          <NavItem>
            <ScrollIntoView selector="#about">
              <Item>
                <NavLink>About</NavLink>
              </Item>
            </ScrollIntoView>
            <ScrollIntoView selector="#project">
              <Item>
                <NavLink>Projects</NavLink>
              </Item>
            </ScrollIntoView>
          </NavItem>
        </Nav>
      </NavWrapper>
    </Navbar>
  )
}
export default Menu
