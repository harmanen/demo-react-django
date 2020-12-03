import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
import LanguageSelector from './LanguageSelector';
import { BOX_COLOR, TEXT_COLOR } from '../../constants';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: BOX_COLOR,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: TEXT_COLOR },
  menuContainer: {
    color: TEXT_COLOR,
    background: BOX_COLOR,
    borderTop: `10px double ${theme.palette.background.main}`,
    height: MENU_CONTAINER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  },
  menuBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  indicator: { backgroundColor: TEXT_COLOR },
  outlined: { borderColor: TEXT_COLOR },
  openMenuButton: { color: TEXT_COLOR },
}));

const TopBar = ({
  tabs,
  tabValue,
  setTabValue,
  handleTabChange,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useSelector((state) => state.isMobile);

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
          <Box className={classes.menuBox}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClickOpen}
              className={classes.openMenuButton}
              classes={{
                outlined: classes.outlined,
              }}
            >
              {t('select component')}
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {tabs.map((tab, index) => (
                <MenuItem
                  key={t(tab.name)}
                  onClick={() => handleClickMenuItem(index)}
                >
                  {t(tab.name)}
                </MenuItem>
              ))}
            </Menu>
            <LanguageSelector />
          </Box>
        ) : (
          // Tabs for large devices
          <Box className={classes.menuBox}>
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
                <Tab
                  label={t(tab.name)}
                  id={tabValue}
                  key={t(tab.name)}
                />
              ))}
            </Tabs>
            <LanguageSelector />
          </Box>
        )}
      </Box>
    </Box>
  );
};

TopBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tabValue: PropTypes.number.isRequired,
  setTabValue: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default TopBar;
