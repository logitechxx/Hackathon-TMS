import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Transporters = React.lazy(() => import('../pages/Transporters'));

export const routes = [
  {
    path: '/',
    element: <Home />
  }
];

export const transporters=[
  {
    path:'/',
    element : <Transporters />
  }
]
