# Subash | Software Developer Portfolio

A modern, responsive, and recruiter-focused developer portfolio website built with **React**, **Vite**, and **Vanilla CSS**. Designed for MCA graduates seeking entry-level software development and IT roles.

---

## 🎨 Theme & Visual Palette

- **Main Background**: `#020817` (Deep Navy)
- **Secondary Background**: `#07172B` (Midnight Blue)
- **Card Background**: `#081D33`
- **Primary Blue**: `#0EA5FF`
- **Cyan**: `#22D3EE`
- **Mint Green Accent**: `#2EE6B8`
- **Primary Text**: `#F8FAFC`
- **Secondary Text**: `#A7B6C8`
- **Border**: `#123B5A`

Includes a clean **Light Mode** toggle, sticky navigation, accessible forms, and responsive mobile layouts.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Step 1: Open Terminal in the project root
Navigate to the `Subash` folder:
```bash
cd "Subash"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 4: Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

---

## 📂 Project Architecture

```text
Subash/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── Components/
│   │   ├── About.jsx       # MCA education, institution & career goal
│   │   ├── Contact.jsx     # Honest mailto dispatch, verified socials
│   │   ├── Education.jsx   # MCA (2026) & BCA (2024) timeline cards
│   │   ├── Experience.jsx  # Mayaa Financial Services with transferable skills
│   │   ├── Footer.jsx      # Dynamic year & quick links
│   │   ├── home.jsx        # Hero section with role, bio & profile
│   │   ├── Navbar.jsx      # Sticky navbar with mobile hamburger menu
│   │   ├── Projects.jsx    # Academic ML and web development showcases
│   │   ├── Resume.jsx      # Dedicated resume download section
│   │   └── Skills.jsx      # Categorized frontend, programming & tools
│   ├── images/
│   │   └── profile.jpeg    # Profile photo
│   ├── resume/
│   │   └── Subash_Resume.pdf # Real resume PDF
│   ├── App.jsx             # Main container & theme provider
│   ├── index.css           # Design tokens, variables & responsive styling
│   └── main.jsx
├── index.html              # SEO metadata & page title
├── package.json
└── vite.config.js
```

---

## 📝 Customization Guide

1. **Profile Picture**: Replace `src/images/profile.jpeg` with your latest photo.
2. **Resume PDF**: Replace `src/resume/Subash_Resume.pdf` whenever you update your resume.
3. **Contact Details**: Update email and LinkedIn URLs in `src/Components/Contact.jsx` and `src/Components/home.jsx`.

---

## 🌐 Free Deployment (Vercel or Netlify)

### Option 1: Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository, set the root directory to `Subash` (if applicable), and deploy.
4. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.

### Option 2: Netlify
1. Drag and drop your compiled `dist` folder directly onto [Netlify Drop](https://app.netlify.com/drop), or connect via GitHub.
