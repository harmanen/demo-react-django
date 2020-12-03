import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  typography: {
    marginBottom: 16,
  },
  divider: {
    marginBottom: 16,
    borderTop: `3px dotted ${theme.palette.primary.main}`,
  },
}));

const Description = ({ description }) => {
  const classes = useStyles();
  const isMobile = useSelector((state) => state.isMobile);

  return (
    <Box>
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        className={classes.typography}
      >
        {description}
      </Typography>
      <Box className={classes.divider} />
    </Box>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
