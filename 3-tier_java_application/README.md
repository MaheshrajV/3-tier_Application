# 2-Tier Web Application (Next.js + Node.js/Express)

This project is a 2-tier architecture consisting of:
- **Frontend:** Next.js (React framework)
- **Backend:** Node.js + Express
- **Database:** (Optional) MySQL/MongoDB — can be connected to the backend

---

## 📂 Project Structure

3-tier/
│
├── backend/ # Node.js backend
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
│
├── frontend/ # Next.js frontend
│ ├── pages/
│ │ ├── index.js # Login page
│ │ └── home.js # Home page after login
│ ├── public/
│ ├── styles/
│ ├── package.json
│ └── ...

yaml
C

## 🛠️ Prerequisites

Make sure you have installed:
- **Node.js** (>= 18)
- **npm** (>= 8)
- (Optional) **Docker** if containerizing

---

## 🚀 Getting Started

### 1. Clone the repository

git clone <your-repo-url>
cd 2-tier
2. Start Backend

cd backend
npm install
node server.js   # or: npm start (if configured in package.json)
By default, the backend will run on:

arduino
http://localhost:5000

3. Start Frontend
bash
cd ../frontend
npm install
npm run dev
The frontend will start at:

arduino
http://localhost:3000

4. Directory Structure for Next.js Routing
Frontend/pages/:

pgsql
Copy
Edit
index.js   →  Login page (accessible at /)
home.js    →  Home page after login (accessible at /home)
When login is successful, redirect to:

js
router.push("/home");
🖼️ Preview
Login Page → Professional background image + styled login form

Home Page → Background image + welcome message + "Go to Dashboard" button

🐛 Troubleshooting
404 Not Found on /home

Ensure frontend/pages/home.js exists (Next.js automatically maps it to /home).

npm run dev gives error

Run it inside the frontend folder, not backend.

tailwindcss: command not found

Install locally: npm install -D tailwindcss postcss autoprefixer

Initialize: npx tailwindcss init -p

📦 Build for Production
Backend:
bash
cd backend
npm install --production

Frontend:
bash
cd frontend
npm run build
npm run start
