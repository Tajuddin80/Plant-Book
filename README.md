# 🌿 PlantBook — Gardening Community & Resource Hub

**PlantBook** is a vibrant platform designed for gardening enthusiasts to share tips, find local gardeners, ask plant care questions, participate in gardening events, and connect with others passionate about plants — from composting to hydroponics and balcony gardening.

---

## 🌐 Live Demo

👉 [🚀 Visit PlantBook](https://plant-book-f2ba2.web.app/)

---

## 🌟 Project Overview

PlantBook cultivates a friendly, knowledge-sharing community for gardeners of all levels. It features:

✅ User authentication and personalized profiles  
✅ Dynamic content sharing (gardening tips, questions, events)  
✅ Event management (post, join, manage workshops)  
✅ Responsive, themeable UI with rich animations  
✅ RESTful backend APIs for data operations  

---

## 📸 Screenshot

<img src="https://github.com/Tajuddin80/Plant-Book/blob/main/plantBook.png" alt="PlantBook Screenshot" />

---

## 🛠 Tech Stack

| Layer       | Tech / Tools                                              |
|-------------|-----------------------------------------------------------|
| **Frontend** | React 19.x, Vite, Tailwind CSS, DaisyUI, Axios, React Router, Swiper, React Tooltip, SweetAlert2, Lottie, React Simple Typewriter |
| **Backend**  | Node.js (22+), Express 5.x, MongoDB, dotenv, CORS, Nodemon |
| **Auth & DB**| Firebase Authentication, Firestore (client-side); MongoDB Atlas / local MongoDB (server-side) |

---

## ✨ Key Features

### 🌱 Frontend (Client)
- Firebase authentication (email/password, Google)  
- Personalized user profiles  
- Share, browse, and search gardening tips  
- Connect with local gardeners and community members  
- Interactive Q&A for plant care  
- Post, join, and manage gardening events  
- Themeable UI (DaisyUI, Tailwind CSS)  
- Rich UX with tooltips, sliders, typewriter, and Lottie animations  

### 🌿 Backend (Server)
- RESTful CRUD APIs for gardening tips, users, and events  
- MongoDB database for persistent storage  
- CORS enabled for secure cross-origin requests  
- Environment configuration via `.env`  
- Nodemon for hot reload in development  

---

## 📦 Dependencies

| Package                        | Purpose                                 |
|---------------------------------|-----------------------------------------|
| `react`, `react-dom`            | React core                             |
| `react-router-dom`              | Routing                                |
| `axios`                         | HTTP requests                          |
| `firebase`                      | Auth + Firestore                       |
| `sweetalert2`                   | Alerts                                 |
| `swiper`                        | Sliders                                |
| `react-tooltip`                 | Tooltips                               |
| `@lottiefiles/dotlottie-react`  | Lottie animations                      |
| `react-simple-typewriter`       | Typewriter effect                      |
| `tailwindcss`, `daisyui`        | Styling / UI components                |
| `express`                       | Backend framework                      |
| `mongodb`                       | Database                               |
| `cors`                          | Cross-origin requests                  |
| `dotenv`                        | Env variables                          |
| `nodemon` (dev)                 | Auto-reloading server                  |

---

## 🚀 How to Run Locally

### 1️⃣ Clone the combined repository
```bash
git clone <your-combined-repo-url>
cd <repo-folder> 

### 2️⃣ Set up the Client
cd client  # or wherever your client code lives
npm install

✅ Create a .env file for your Firebase config:
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# add other Firebase keys as needed

Run the client:
npm run dev
Open: http://localhost:5173


3️⃣ Set up the Server
cd ../server  # or your server folder
npm install


✅ Create a .env file for your server:
PORT=5000
MONGODB_URI=your_mongodb_connection_string

✅ run the server
nodemon index.js
Server runs at: http://localhost:5000

📁 Directory Structure (Suggested)
PlantBook/
├── client/    # React + Vite frontend
├── server/    # Node.js + Express backend
├── README.md  # Combined README


🤝 Contributing
Feel free to fork, contribute, and submit pull requests to help improve PlantBook!
