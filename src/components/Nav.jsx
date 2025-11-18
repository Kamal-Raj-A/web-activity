import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../auth'


export default function Nav() {
const loggedIn = auth.isAuthenticated()
return (
<nav style={{ padding: 12, borderBottom: '1px solid #ccc' }}>
<Link to="/" style={{ marginRight: 12 }}>
Home
</Link>
<Link to="/dashboard" style={{ marginRight: 12 }}>
Dashboard
</Link>
{!loggedIn ? (
<Link to="/login">Login</Link>
) : (
<button
onClick={() => auth.logout(() => (window.location.href = '/'))}
style={{ marginLeft: 12 }}
>
Logout
</button>
)}
</nav>
)
}