import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    color: "#fff",
    backgroundColor: "#242531",
    marginBottom: '16px'
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  function socialNetwork(network) {
    let icon;
    if (network.type==='GitHub') {
      icon = <GitHubIcon/>
    }
    else if (network.type === 'LinkedIn') {
      icon = <LinkedInIcon/>
    }
    else if (network.type === 'Paper') {
      icon = <DescriptionIcon />
    }
    return  <Link display="block" style={{color: "#88bee9"}}  variant="body1" href={network.url} key={network}>
              <Grid container direction="row" spacing={1} alignItems="center">
                <Grid item>
                  {icon}
                </Grid>
                <Grid item>{network.name}</Grid>
              </Grid>
            </Link>
  }

  return (
    <Grid item xs={12} md={3}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}               
        </Typography>
        <Typography>{description}
          </Typography>
      </Paper>     
      {social.map((network) => (
        socialNetwork(network)
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
