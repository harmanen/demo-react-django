import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.container}>
      <Typography variant="h2">Demo</Typography>
    </Box>
  );
};

export default TopBar;
