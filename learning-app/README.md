# 📚 LearnHub - Online Learning App

A modern mobile-first learning management app built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** for college students.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

---

## 🎯 Problem Statement

College students face these challenges with existing learning platforms:

| Problem | Our Solution |
|---------|--------------|
| Hidden deadlines | "Due Soon" section with countdown timers |
| Scattered content | Tab-based course navigation |
| Missing teacher updates | Announcements section + notifications |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

---

## 📱 Screens

| Screen | Description |
|--------|-------------|
| **Dashboard** | Due assignments, courses grid, announcements |
| **Course Detail** | Tabbed navigation (Videos/Materials/Assignments) |
| **Assignment Detail** | Description, requirements, related materials |
| **Submission** | Drag-drop file upload with confirmation |
| **Courses** | All enrolled courses with search |
| **Calendar** | Month view with deadline highlights |
| **Profile** | User stats, achievements, settings |

---

## 🧪 Test Flow

```
Dashboard → Click "Data Structures Lab Report" → View Details → Submit Assignment → Success!
```

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#6366F1` | Buttons, active states |
| Success | `#10B981` | Submitted, completed |
| Warning | `#F59E0B` | Due soon (3 days) |
| Danger | `#EF4444` | Due tomorrow, late |

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** SemiBold/Bold
- **Body:** Regular 14px

---

## 📂 Project Structure

```
learning-app/
├── app/
│   ├── page.tsx                # Dashboard
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Design system
│   ├── courses/
│   │   ├── page.tsx            # Courses list
│   │   └── [id]/page.tsx       # Course detail
│   ├── assignments/
│   │   └── [id]/
│   │       ├── page.tsx        # Assignment detail
│   │       └── submit/page.tsx # Submission
│   ├── calendar/page.tsx       # Calendar view
│   └── profile/page.tsx        # Profile
├── components/
│   ├── Navbar.tsx              # Bottom navigation
│   ├── CourseCard.tsx          # Course card
│   ├── AssignmentCard.tsx      # Assignment with urgency
│   ├── StatusBadge.tsx         # Status indicators
│   ├── ProgressBar.tsx         # Progress bar
│   └── AnnouncementCard.tsx    # Teacher announcements
└── package.json
```

---

## ✅ Assignment Requirements Met

- [x] Problem Understanding (200-300 words)
- [x] User Flow Diagram
- [x] Wireframes (4 screens)
- [x] High-Fidelity UI Designs
- [x] Design Decisions Documentation
- [x] Clickable Prototype (Bonus)

---

## 📄 License

MIT License - Built for UI/UX Internship Assignment (Education Domain)
