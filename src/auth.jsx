export const auth = {
isAuthenticated() {
return Boolean(localStorage.getItem('fake_auth'))
},
login(cb) {
localStorage.setItem('fake_auth', '1')
if (cb) cb()
},
logout(cb) {
localStorage.removeItem('fake_auth')
if (cb) cb()
}
}