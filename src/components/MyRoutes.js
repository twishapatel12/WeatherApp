import React from 'react';
import { Route, useRoutes } from 'react-router-dom';
import WeatherDisplay from './WeatherDisplay';
import { useNavigate } from 'react-router-dom';

const MyRoutes = () => {
  const navigate = useNavigate();
  const routes = useRoutes([
    { path: '/', element: <WeatherDisplay /> },
  ]);
  return routes;
};

export default MyRoutes;