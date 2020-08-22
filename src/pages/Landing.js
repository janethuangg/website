import React from "react"
import { Heading, Name, Subtitle } from "../components/Heading/HeadStyle"
import { Image } from "../components/Common"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import { Section } from "../components/Common"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centeredBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <Section>
      <div className={classes.centeredBox}>
        <Name>Janet Huang</Name>
        <Grid
          container
          spacing={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid item xs={1} className={classes.centeredBox}>
            <IconButton
              aria-label="facebook"
              onClick={() =>
                window.open("https://github.com/janethuangg", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1} className={classes.centeredBox}>
            <IconButton
              aria-label="linkedin"
              onClick={() =>
                window.open("mailto:janet.huang@stern.nyu.edu", "_blank")
              }
            >
              <EmailIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1} className={classes.centeredBox}>
            <IconButton
              aria-label="linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/janet-huang/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1} className={classes.centeredBox}>
            <IconButton
              aria-label="facebook"
              onClick={() =>
                window.open("https://www.facebook.com/janethuangg/", "_blank")
              }
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Image
          style={{ borderRadius: "100%" }}
          src={require("../images/janet.jpg")}
        />
        <Subtitle>
          "Huang" directly translates to yellow, a color I associate with warmth
          + happiness
        </Subtitle>
      </div>
    </Section>
  )
}
export default Landing
