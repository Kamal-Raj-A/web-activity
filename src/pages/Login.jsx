import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth } from '../auth'


export default function Login() {
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/dashboard'


function handleLogin(e) {
e.preventDefault()
// fake login
auth.login(() => {
navigate(from, { replace: true })
})
}


return (
<div style={{ maxWidth: 420 }}>
<h1>Login</h1>
<form onSubmit={handleLogin}>
<div style={{ marginBottom: 8 }}>
<label>
Username
<input required defaultValue="user" />
</label>
</div>
<div style={{ marginBottom: 8 }}>
<label>
Password
<input required type="password" defaultValue="password" />
</label>
</div>
<button type="submit">Login</button>
</form>
</div>
)
}