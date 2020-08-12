import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import GitHubIcon from "@material-ui/icons/GitHub"
import WebIcon from "@material-ui/icons/Web"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  github,
  website,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {github !== undefined ? (
            <IconButton
              aria-label="github"
              onClick={() => window.open(github, "_blank")}
            >
              <GitHubIcon />
            </IconButton>
          ) : (
            console.log("empty")
          )}

          {website !== undefined ? (
            <IconButton
              aria-label="website"
              onClick={() => window.open(website, "_blank")}
            >
              <WebIcon />
            </IconButton>
          ) : (
            console.log("empty")
          )}
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={require("../images/" + image)}
        title="Live from space album cover"
      />
    </Card>
  )
}

export default ProjectCard
