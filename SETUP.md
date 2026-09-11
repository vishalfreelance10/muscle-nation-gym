# Muscle Nation Fitness - Setup & Deployment Guide

## Quick Start

### Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with actual values (optional for email)
# Email setup is optional - form will still work without it

# Start development server
npm run dev
# Server runs on http://localhost:5000
```

### Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development
npm run dev
# Frontend runs on http://localhost:3000
```

## Frontend Package.json
```json
{
  "name": "muscle-nation-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.292.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16"
  }
}
```

## Tailwind Config
Create `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Main Entry (src/main.jsx)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

Create `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `src/App.jsx`:
- Paste the `frontend.jsx` content here

## File Structure
```
project-root/
├── frontend/
│   ├── src/
│   │   ├── App.jsx (frontend.jsx content)
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── backend/
│   ├── server.js
│   ├── .env
│   ├── .env.example
│   ├── inquiries.json (auto-created)
│   └── package.json
└── README.md
```

## Deployment

### Frontend (Vercel - Recommended)
```bash
cd frontend
npm run build
# Connect to Vercel, push to GitHub, auto-deploy
```

Or:
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Backend (Render.com or Railway.app)
1. Push to GitHub
2. Connect repo to Render/Railway
3. Set environment variables in dashboard
4. Deploy

**Update frontend API URL in production:**
In `frontend.jsx`, change:
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
```
To:
```javascript
const response = await fetch('https://your-backend-url.com/api/contact', {
```

## Contact Form Features
- ✅ Form validation
- ✅ In-memory + file storage (inquiries.json)
- ✅ Optional email notifications
- ✅ WhatsApp integration
- ✅ Phone call button
- ✅ Google Maps embed

## Update Pricing
Edit pricing array in `frontend.jsx` around line 450:
```javascript
{[
  { name: 'BASIC', price: '₹1,999', features: [...] },
  ...
]}
```

## Update Trainers
Edit trainers array in `frontend.jsx`:
```javascript
{[
  { name: 'Trainer Name', specialty: 'Specialty' },
  ...
]}
```

Replace image URLs with actual trainer photos when ready.

## Add Your Pricing Photo
Replace gallery image URLs with your own Unsplash/local images:
```javascript
{[
  'your-image-url-1.jpg',
  'your-image-url-2.jpg',
  ...
]}
```

## Commands Reference
```bash
# Backend
npm run dev      # Development with auto-reload
npm start        # Production

# Frontend
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview build
```

## Next Steps
1. Update contact email in `.env`
2. Replace placeholder images with actual gym photos
3. Customize trainer names/details
4. Deploy backend first, then frontend
5. Test contact form end-to-end
6. Go live with the demo link
