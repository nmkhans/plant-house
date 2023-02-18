import React from 'react';
import {useAuthUser} from 'react-auth-kit'
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const auth = useAuthUser()
    const user = auth()
    
    if((user?.role === "user") || (user?.role === "admin")) {
        return children
    } else {
        return <Navigate to="/" replace={true} />
    }
}

export default UserRoute;