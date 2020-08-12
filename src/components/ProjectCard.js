import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import GitHubIcon from "@material-ui/icons/GitHub"
import WebIcon from "@material-ui/icons/Web"
import IconButton from "@material-ui/core/IconButton"

// const useStyles = makeStyles({
//   root: {
//     // maxWidth: 300,
//     width: "25vw",
//   },
//   media: {
//     height: 140,
//   },
// })

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "25vw",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 30,
    width: 30,
  },
}))

const ProjectCard = ({ title, subtitle, description, image }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    // <Card className={classes.root}>
    //   {/* <CardActionArea> */}
    //   <CardMedia
    //     className={classes.media}
    //     image={require("../images/baking.png")}
    //     title={title}
    //   />
    //   <CardContent>
    //     <Typography variant="h5" component="h2">
    //       {title}
    //     </Typography>
    //     <Typography color="textSecondary" style={{ marginBottom: 12 }}>
    //       {subtitle}
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   {/* </CardActionArea> */}
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
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
          <IconButton aria-label="github">
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="web">
            <WebIcon />
          </IconButton>
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
