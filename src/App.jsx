import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header>
        <Routes>
          {publicRoutes.map(({ name, path, Element }) => <Route key={name} path={path} element={<Element />} />)}

          {privateRoutes.map(({ name, path, Element }) => <Route key={name} path={path} element={
            <RequireAuth loginPath="/login" >
              <Element />
            </RequireAuth>
          } />)}
        </Routes>
        <Footer />
      </Header>
      <Toaster />
    </>
  )
}

export default App
