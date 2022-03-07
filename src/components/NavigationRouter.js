import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Closure from './closure/Closure';
import HomeScreen from './homescreen/HomeScreen';
import OptimizationScreen from './optimizationscreen/OptimizationScreen';
import ReduxScreen from './reduxscreen/ReduxScreen';

export default function NavigationRouter() {

    return <Router >
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/optimization" element={<OptimizationScreen />} />
            <Route exact path="/closure" element={<Closure />} />
        </Routes>
    </Router >
}