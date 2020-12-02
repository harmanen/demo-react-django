import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from './layout/components/MainLayout';

const App = () => <Route component={MainLayout} path="/" />;

export default App;
