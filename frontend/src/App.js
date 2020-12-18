import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import MainLayout from './layout/components/MainLayout';
import { setIsMobile } from './layout/slices';
import { MEDIA_LIMIT } from './constants';

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const currentMedia = useMediaQuery(
    theme.breakpoints.down(MEDIA_LIMIT),
  );

  useEffect(() => {
    dispatch(setIsMobile(currentMedia));
  }, [currentMedia, dispatch]);

  return <Route component={MainLayout} path="/" />;
};

export default App;
