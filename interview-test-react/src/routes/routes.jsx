import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import NProgress from 'nprogress';

const Login = lazy(() => import('../pages/Auth/Login'));
const JobList = lazy(() => import('../pages/Jobs/List'));
const JobDetail = lazy(() => import('../pages/Jobs/Detail'));

const AppRoute = () => {
    const LazyLoad = () => {
        useEffect(() => {
            NProgress.start();

            return () => {
                NProgress.done();
            };
        }, []);

        return <></>;
    };

    return (
        <Routes>
            <Route path="/login" element={
                <Suspense fallback={<LazyLoad />}>
                    <Login />
                </Suspense>
            } />
            <Route path='/jobs' element={
                <Suspense fallback={<LazyLoad />}>
                    <JobList />
                </Suspense>
            } />
            <Route path='/jobs/:id' element={
                <Suspense fallback={<LazyLoad />}>
                    <JobDetail />
                </Suspense>
            } />
        </Routes>
    );
};

export default AppRoute;
