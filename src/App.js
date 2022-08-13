import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/TransportLayout';
import { routes, transporters } from './route';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {routes.map((route) => {
            const { element, path } = route;
            return <Route key={path} path={path} element={element} />;
          })}

        <Route element={<Layout />} path="/transporter">
          {transporters.map((route) => {
            const { element, path } = route;
            return(
                <Route key={path} path={path} element={element} />
            );
          })}
          </Route>


        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
