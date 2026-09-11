# Muscle Nation Fitness - Complete Website

A modern, responsive gym website built with React, Vite, Tailwind CSS, and Express.

## ⚡ Quick Start

### Backend (5000)
```bash
cd backend
npm install
npm run dev
```

### Frontend (3000)
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Project Structure

```
muscle-nation-fitness/
├── frontend/
│   ├── src/
│   │   ├── App.jsx           (main component)
│   │   ├── main.jsx          (entry point)
│   │   └── index.css         (tailwind)
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── index.html
├── backend/
│   ├── server.js             (express app)
│   ├── package.json
│   └── .env.example
├── SETUP.md                   (detailed setup guide)
└── README.md
```

## 🎯 Features

✅ Responsive design (mobile-first)  
✅ WhatsApp integration  
✅ Contact form with validation  
✅ Google Maps embed  
✅ Pricing tiers  
✅ Trainer profiles  
✅ Gallery section  
✅ Floating action buttons  

## 🚀 Deployment

### Frontend → Vercel
```bash
cd frontend
npm run build
vercel
```

### Backend → Render.com or Railway.app
Push to GitHub, connect repo, set env vars, deploy.

## 📝 Customization

1. **Update Contact Info:**
   - Edit phone number in `frontend/src/App.jsx` (line 25)
   - Edit address in contact section

2. **Update Pricing:**
   - Edit pricing array in `App.jsx` (line ~450)

3. **Update Trainers:**
   - Replace trainer names and photos in `App.jsx` (line ~400)

4. **Update Gallery:**
   - Replace image URLs with your gym photos

5. **Email Notifications:**
   - Create `.env` from `.env.example`
   - Add your Gmail and app password
   - Inquiries will be emailed to you

## 📞 Contact

For demo: +91 9503363863  
Location: Aundh, Pune

---

Built with ❤️ for Muscle Nation Fitness
