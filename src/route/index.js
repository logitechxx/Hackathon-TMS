import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Transporters = React.lazy(() => import('../pages/Transporters'));
const Login = React.lazy(() => import('../pages/login/'));

export const routes = [
  {
    path: '/',
    element: <Login />
  }
];

export const transporters=[
  {
    path:'/',
    element : <Transporters />
  }
]
