import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import mfpImage from '../Projects/Projects/Graphiti/img/graphitiScreenshot.png'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    // backgroundColor: theme.palette.grey[800],
    backgroundImage: `url(${mfpImage})`,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const { post } = props;
  const classes = useStyles();
  const history = useHistory();

  function routeChange(newpath) {  // Using div+onClick instead of an a+href because you can't stop a from propagating (see tags.js)
    let path = newpath; 
    history.push(path);
  }
  // const bgImage = require(post.image)
  return (
    <Paper className={classes.mainFeaturedPost} style={{backgroundImage: `url(${mfpImage})`}} >
      {/* Increase the priority of the hero background image */}
      <div className={classes.overlay} onClick={()=>routeChange(post.link)} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent} onClick={()=>routeChange(post.link)}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" style={{color: "#88bee9"}} href={post.link}>
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
