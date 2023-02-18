import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoute';
import { Toaster } from 'react-hot-toast';
import Admin from './pages/Admin/Admin';
import AdminRoute from './components/AdminRoute/AdminRoute';
import adminRoute from './routes/adminRoute';
import User from './pages/User/User';
import userRoutes from './routes/userRoute';
import UserRoute from './components/UserRoute.jsx/UserRoute';

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

          <Route path="/admin" element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }>
            {adminRoute.map(({ name, path, Element }) => <Route key={name} path={path} element={<Element />} />)}
          </Route>

          <Route path="/user" element={
            <UserRoute>
              <User />
            </UserRoute>
          }>
            {userRoutes.map(({ name, path, Element }) => <Route key={name} path={path} element={<Element />} />)}
          </Route>
        </Routes>
        <Footer />
      </Header>
      <Toaster />
    </>
  )
}

export default App
