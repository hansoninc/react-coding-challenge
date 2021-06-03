import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    backgroundColor: 'transparent',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 25px 20px',
    marginBottom: '20px',
    ...theme.mixins.toolbar,
    '&::before': {
      content: '""',
      opacity: '0.9',
      zIndex: '-1',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '-20px',
      height: '125px',
      background: theme.palette.grey[200],
      transform: 'skewY(-8deg)',
      transformOrigin: 'top',
    },
  },
  iconColor: {
    htmlColor: '#fff',
    color: '#fff',
  },
  logo: {
    maxHeight: '40px',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: theme.palette.common.white,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    overflowX: 'hidden',
  },
  contentHome: {
    flexGrow: 1,
    // height: '100vh',
    overflow: 'auto',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    '&::before': {
      content: '""',
      opacity: '0.9',
      zIndex: '-1',
      position: 'absolute',
      left: '0',
      right: '0',
      height: '375px',
      marginTop: '-85px',
      background: theme.palette.grey[900],
      transform: 'skewY(2.75deg)',
      transformOrigin: '100%',
    },
  },
  container: {
    backgroundColor: 'transparent',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const Page = (props: React.PropsWithChildren<{}>) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main id="main-content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
};
