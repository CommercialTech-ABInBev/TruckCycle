import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../config/PrivateRoute';
import routes from './routes';

const RoutePaths =  () =>
    <Routes>
       {
           routes.map(
            (route) =>
                route.elements &&
                route.elements.map((route, i) =>
                     (
                        <Route
                            key={i}
                            path={route.path}
                            element={
                            <PrivateRoute>
                              <route.component/>
                            </PrivateRoute>
                            }
                        />
                    )
                )
        )
       }                     
    </Routes>

export default RoutePaths;
    