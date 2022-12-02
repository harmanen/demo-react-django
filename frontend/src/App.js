import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
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

  return (
    <Routes>
      <Route element={<MainLayout />} path="/" />
    </Routes>
  );
};

export default App;
