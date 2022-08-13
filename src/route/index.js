import React from 'react';

const Transporters = React.lazy(() => import('../pages/Transporter'));
const TruckPage = React.lazy(() => import('../pages/Transporter/Truck'));

const Login = React.lazy(() => import('../pages/login/'));
const Shipper = React.lazy(() => import('../pages/shipper'));

export const routes = [
  {
    path: '/',
    element: <Login />
  }
];

export const transporters=[
  {
    path:'/transporter',
    element : <TruckPage />
  },
]

export const shipper=[
  {
    path:'/shipper',
    element : <Shipper />
  }
]
