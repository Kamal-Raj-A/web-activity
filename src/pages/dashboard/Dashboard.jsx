import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Dashboard() {
return (
<div>
<h1>Dashboard</h1>
<div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
<Link to="profile">Profile</Link>
<Link to="settings">Settings</Link>
<Link to="notifications">Notifications</Link>
</div>


<div style={{ padding: 12, border: '1px solid #ddd' }}>
{/* nested routes render here */}
<Outlet />
</div>
</div>
)
}