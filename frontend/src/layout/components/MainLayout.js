import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopBar from './TopBar';
import { Box, Typography } from '@material-ui/core';

const topBarHeight = 162;

const useStyles = makeStyles((theme) => ({
  topBar: { height: topBarHeight },
  mainContent: {
    height: `calc(100vh - ${topBarHeight}px)`,
    background: theme.palette.background.main,
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabs = ['first', 'second', 'third']; // TMP

  return (
    <Box>
      {/* Top bar */}
      <Box className={classes.topBar}>
        <TopBar
          tabs={tabs}
          tabValue={tabValue}
          setTabValue={setTabValue}
          handleTabChange={handleTabChange}
          isMobile={isMobile}
        />
      </Box>
      {/* Main content  */}
      {/* TBD */}
      <Box p={1} className={classes.mainContent}>
        <Typography>{tabs[tabValue]}</Typography>
      </Box>
    </Box>
  );
};

export default MainLayout;
