import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import publicRoutes from './routes/publicRoutes'
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        {publicRoutes.map(({ name, path, Element }) => <Route key={name} path={path} element={<Element />} />)}
      </Routes>
    </>
  )
}

export default App
