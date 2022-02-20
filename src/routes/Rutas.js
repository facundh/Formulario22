import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import Formulario from '../views/Formulario';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import PrivateRoutes from './PrivateRoutes';


const Rutas = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route  path='/' element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route  path='/registro' element={<Register />} />
                    <Route path='/formulario' element={<Formulario />} />
                    <Route  path='/home' element={<PrivateRoutes redirect='/' component={<Home />}/>}/>
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default Rutas