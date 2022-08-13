import React from 'react';

const Transporters = React.lazy(() => import('../pages/Transporters'));
const Login = React.lazy(() => import('../pages/login/'));
const Shipper = React.lazy(() => import('../pages/shipper'));

export const routes = [
  {
    path: '/',
    element: <Shipper />
  }
];

export const transporters=[
  {
    path:'/transporter',
    element : <Transporters />
  }
]

export const shipper=[
  {
    path:'/shipper',
    element : <Shipper />
  }
]
