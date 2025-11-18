import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'
import Notifications from './pages/dashboard/Notifications'
import ProtectedRoute from './routes/ProtectedRoute'
import Nav from './components/Nav'


export default function App() {
return (
<div>
<Nav />
<main style={{ padding: 20 }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />


{/* Protected dashboard route with nested subpages */}
<Route
path="/dashboard/*"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
>
<Route index element={<Navigate to="profile" replace />} />
<Route path="profile" element={<Profile />} />
<Route path="settings" element={<Settings />} />
<Route path="notifications" element={<Notifications />} />
</Route>


<Route path="*" element={<h2>404 - Not Found</h2>} />
</Routes>
</main>
</div>
)
}