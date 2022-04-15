import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute(Component) {

    const { isAuthenticated } = useSelector(state => state.auth)

    return (
        <Route path='/create'
            element={
                <RequireAuth isAuthenticated={isAuthenticated}>
                    <Component />
                </RequireAuth>
            }
        />
    )
}


function RequireAuth({ children, isAuthenticated }) {
    return isAuthenticated ? children : <Navigate to='/' />;
}