import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import TopBar from './TopBar';
import { TOP_BAR_HEIGHT } from '../constants';
import Timeline from '../../timeline/Timeline';
import { APP_MAX_WIDTH } from '../../constants';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: APP_MAX_WIDTH,
    height: '100vh',
    background: theme.palette.background.main,
  },
  topBar: { height: TOP_BAR_HEIGHT, width: '100%' },
  mainContent: {
    width: '100%',
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
    <Box className={classes.appContainer}>
      <Box className={classes.container}>
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
        <Box p={1} className={classes.mainContent}>
          {tabs[tabValue].component}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
