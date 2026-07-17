# 🔗 URL Shortener

A full-stack **MERN** URL Shortener application that allows users to create short, shareable links with optional custom slugs. Authenticated users can manage their URLs, monitor click counts, and securely access their dashboard.

## 🚀 Features

- 🔐 User Authentication (Register/Login/Logout)
- 🍪 JWT Authentication using HTTP-only Cookies
- ✂️ Generate short URLs instantly
- ✨ Create custom short URLs (Authenticated users)
- 📊 Track the number of clicks for each shortened URL
- 📋 One-click copy to clipboard
- 📱 Fully responsive design for desktop, tablet, and mobile
- 📂 User dashboard to view all created URLs
- ⚡ Fast and modern UI built with React and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- TanStack React Query
- TanStack Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Cookie Parser
- NanoID

### Deployment
- Render (Frontend & Backend)

---

## 📂 Project Structure

```
UrlShortner/
│
├── FRONTEND/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── BACKEND/
│   ├── src/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Rajveer8169/UrlShortner.git
cd UrlShortner
```

---

## Backend Setup

```bash
cd BACKEND
npm install
```

Create a `.env` file inside the `BACKEND` folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

APP_URL=http://localhost:3000
```

Start the backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd FRONTEND
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---


## 🌐 Live Demo


> https://urlshortner-frontend-2ubg.onrender.com/

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/logout` | Logout User |

### URL

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/create` | Create Short URL |
| GET | `/:id` | Redirect to Original URL |
| GET | `/api/user/urls` | Get User URLs |

---

## 🎯 Future Improvements

- QR Code generation
- URL expiration
- Analytics dashboard
- Password-protected URLs
- Custom domains
- Edit/Delete URLs
- Search & Filter URLs

---

## 👨‍💻 Author

**Rajveer Rai**

GitHub: https://github.com/Rajveer8169

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
