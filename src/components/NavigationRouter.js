import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AsyncScreen from './asyncawait/AsyncScreen';
import Closure from './closure/Closure';
import Header from './common/Header';
import FunctionScreen from './functionscreen/FunctionScreen';
import HomeScreen from './homescreen/HomeScreen';
import OptimizationScreen from './optimizationscreen/OptimizationScreen';
import ReduxScreen from './reduxscreen/ReduxScreen';

export default function NavigationRouter() {

    return <Router >
            <Header />
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/optimization" element={<OptimizationScreen />} />
            <Route exact path="/closure" element={<Closure />} />
            <Route exact path="/redux" element={<ReduxScreen />} />
            <Route exact path="/async" element={<AsyncScreen />} />
            <Route exact path="/functions" element={<FunctionScreen />} />
        </Routes>
    </Router >
}