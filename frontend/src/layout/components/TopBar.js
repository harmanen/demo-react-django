import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import { MENU_CONTAINER_HEIGHT } from '../constants';

const useStyles = makeStyles((theme) => {
  const boxColor = theme.palette.primary.dark;
  const textColor = theme.palette.background.light;

  return {
    titleContainer: {
      background: boxColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { color: textColor },
    menuContainer: {
      color: textColor,
      background: boxColor,
      borderTop: `10px double ${theme.palette.background.main}`,
      height: MENU_CONTAINER_HEIGHT,
      // Center menu button for small devices
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    indicator: { backgroundColor: textColor },
    outlined: { borderColor: textColor },
    openMenuButton: { color: textColor },
  };
});

const TopBar = ({
  tabs,
  tabValue,
  setTabValue,
  handleTabChange,
  isMobile,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (newValue) => {
    setTabValue(newValue);
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Title */}
      <Box p={1} className={classes.titleContainer}>
        <Typography variant="h2" className={classes.title}>
          Demo
        </Typography>
      </Box>
      {/* Menu or tabs */}
      <Box p={1} className={classes.menuContainer}>
        {isMobile ? (
          // Pop-up menu for small devices
          <Box>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              className={classes.openMenuButton}
              classes={{
                outlined: classes.outlined,
              }}
            >
              Select component
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {tabs.map((tab, index) => (
                <MenuItem
                  key={tab}
                  onClick={() => handleClickMenuItem(index)}
                >
                  {tab}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          // Tabs for large devices
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={tabValue}
            onChange={handleTabChange}
            classes={{
              indicator: classes.indicator,
            }}
          >
            {tabs.map((tab) => (
              <Tab label={tab} id={tabValue} key={tab} />
            ))}
          </Tabs>
        )}
      </Box>
    </Box>
  );
};

TopBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabValue: PropTypes.number.isRequired,
  setTabValue: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default TopBar;
