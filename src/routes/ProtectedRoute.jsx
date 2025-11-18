import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../auth'


export default function ProtectedRoute({ children }) {
const location = useLocation()
if (!auth.isAuthenticated()) {
// redirect to login, preserve the original location
return <Navigate to="/login" state={{ from: location }} replace />
}
return children
}