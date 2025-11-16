import React from 'react';

// Routes,Router,Navigate
import {Routes,Route, Navigate} from 'react-router-dom'

// pages
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/PageNotFound';

// tanstack/react-query
import { useQuery } from '@tanstack/react-query';

// services => user-api
import { getProfile } from '../services/user';

// components => module => loader
import Loader from '../components/templates/modules/Loader';


const Router = () => {

    const {data,isLoading} = useQuery(["profile"],getProfile);

    if(isLoading) return <Loader/>

    return (
        <>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/dashboard' element={data ? <DashboardPage/> : <Navigate to={'/auth'}/>} />
            <Route path='/admin' element={data && data.data.role == 'ADMIN' ? <AdminPage/> : <Navigate to='/' />} />
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/auth' element={data ? <Navigate to='/dashboard' /> : <AuthPage/>} />
        </Routes>
        </>
    );
};

export default Router;