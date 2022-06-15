/* eslint-disable no-shadow */
import React, {memo} from 'react';
import {Navigate} from 'react-router-dom';


function PrivateRoute({ children }) {
    const auth = true;
    return auth ? children : <Navigate to="/" />;
}
export default memo(PrivateRoute);
