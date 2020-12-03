import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import TopBar from './TopBar';
import { TOP_BAR_HEIGHT } from '../constants';
import Timeline from '../../timeline/Timeline';

const useStyles = makeStyles((theme) => ({
  topBar: { height: TOP_BAR_HEIGHT },
  mainContent: {
    height: `calc(100vh - ${TOP_BAR_HEIGHT}px)`,
    background: theme.palette.background.main,
  },
}));

const MainLayout = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabs = [
    // Add names to translations!
    {
      name: 'timeline',
      component: Timeline,
    },
  ];

  return (
    <Box>
      {/* Top bar */}
      <Box className={classes.topBar}>
        <TopBar
          tabs={tabs}
          tabValue={tabValue}
          setTabValue={setTabValue}
          handleTabChange={handleTabChange}
        />
      </Box>
      {/* Main content  */}
      {/* TBD */}
      <Box p={1} className={classes.mainContent}>
        {tabs[tabValue].component}
      </Box>
    </Box>
  );
};

export default MainLayout;
