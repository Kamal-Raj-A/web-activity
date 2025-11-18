# React SPA Dashboard (Protected Routes)

A simple Single Page Application (SPA) built with React and React Router featuring:

🏠 Home Page

🔐 Login Page

📊 Dashboard with nested routes

👤 Profile

⚙️ Settings

🔔 Notifications

🔒 Protected routing (Dashboard pages accessible only when logged in)

This project is built for learning and practicing React Router, Authentication Logic, and Component-based structure.

🚀 Features
✅ React Router v6

Browser-based navigation

Nested routes for dashboard pages

Clean component structure

🔒 Protected Routes

Users must log in to access /dashboard/* pages.

Auth state stored in localStorage (demo purpose).

# 📁 Organized Folder Structure
src/
 ├── components/
 ├── pages/
 │    ├── Home.jsx
 │    ├── Login.jsx
 │    └── dashboard/
 │         ├── Dashboard.jsx
 │         ├── Profile.jsx
 │         ├── Settings.jsx
 │         └── Notifications.jsx
 ├── routes/
 │    └── ProtectedRoute.jsx
 ├── App.jsx
 ├── index.jsx
 ├── auth.js
 └── style.css

# 🛠️ Tech Stack

React 18

React Router DOM 6

JavaScript (ES6+)

Vite / CRA (depending on your setup)

CSS for basic styling

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Kamal-Raj-A/web-activity.git

2️⃣ Navigate into the project
cd web-activity

3️⃣ Install dependencies
npm install

4️⃣ Start the development server

If using Vite:

npm run dev


If using Create React App:

npm start

🔑 Login Demo

There is no real user authentication.
To log in, use any username/password — it uses a simple localStorage-based login for demo purposes.

📚 Learning Outcomes

By building this project, you learn:

React routing

Protected route handling

useNavigate(), useLocation()

Nested routes with <Outlet />

Component-based file organization

🤝 Contributing

Feel free to fork this repository and submit pull requests.

📜 License

This project is licensed under the MIT License.

# OUTPUT :
<img width="1914" height="949" alt="image" src="https://github.com/user-attachments/assets/10598fbf-02aa-42cf-b284-db14ad02fa6b" />
<img width="1919" height="947" alt="image" src="https://github.com/user-attachments/assets/66b0aeda-5168-4f61-84af-83c3ea069151" />
