# Courstack — Frontend

> A production-grade Learning Management System frontend built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. Designed for scalability, clean architecture, and an exceptional user experience.

🌐 **Live App:** [https://courstack.vercel.app](https://courstack.vercel.app) &nbsp;|&nbsp; 📦 **Repo:** [github.com/Sushanto171/courstack](https://github.com/Sushanto171/courstack) &nbsp;|&nbsp; 🔗 **Backend API:** [https://courstakc-backend.vercel.app](https://courstakc-backend.vercel.app)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Live Demo & Test Credentials](#live-demo--test-credentials)
- [Features](#features)
- [Project Structure](#project-structure)
- [Architecture Decisions](#architecture-decisions)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

**Courstack** is a full-featured LMS platform frontend connecting students, instructors, and admins. It integrates with the Courstack REST API to deliver a seamless course discovery, enrollment, and learning experience.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| State Management | Redux Toolkit |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS |
| Auth | JWT via HTTP-only Cookies |
| Route Protection | Next.js Proxy (`proxy.ts`) |
| Deployment | Vercel |

---

## Project Status

> 🚧 **This project is actively under development.** The following tracks what has been completed and what is planned.

### ✅ Completed

| Feature | Description |
|---|---|
| Landing Page UI | Fully responsive landing page |
| Authentication | Functional login & registration flows |
| Protected Routes | Route protection via `proxy.ts` |
| Proxy | API request proxying with cookie forwarding via `proxy.ts` |
| Cookie Management | Secure HTTP-only cookie handling for JWT tokens |
| Redux User Store | Global user state management with Redux Toolkit |
| Deployment | Live on Vercel |

### 🔄 In Progress / Planned

| Feature | Status |
|---|---|
| Dashboard (Student / Instructor / Admin) | Planned |
| Course listing & discovery | Planned |
| Course detail page | Planned |
| Lesson viewer | Planned |
| Enrollment flow | Planned |
| Instructor course management | Planned |
| Admin panel | Planned |
| Lesson progress tracking | Planned |
| Profile & settings pages | Planned |
| Payment integration UI | Planned |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 10 (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sushanto171/courstack.git
cd courstack

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Fill in required values

# Start development server
pnpm dev
```

The app will run at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the root and configure the following:

```env
# Backend API
NEXT_PUBLIC_API_URL=https://courstakc-backend.vercel.app

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

---

## Live Demo & Test Credentials

**Live App:** [https://courstack.vercel.app](https://courstack.vercel.app)

> ⚠️ These are demo credentials for testing purposes only.

| Role | Email | Password |
|---|---|---|
| 🔴 Super Admin | `superadmin@courstack.com` | `SuperSecret123!` |
| 🟠 Admin | `admin@courstack.com` | `Admin@1` |
| 🟡 Instructor | `instructor@courstack.com` | `Instructor@1` |
| 🟢 Student | `student@courstack.com` | `Student@1` |

---

## Features

### Authentication
- Login and registration with React Hook Form + Zod validation
- JWT stored in secure HTTP-only cookies
- Token-based session persistence across page reloads

### Route Protection & Proxy
- `proxy.ts` intercepts unauthenticated requests to protected routes
- Role-aware redirects (e.g. Admin → `/admin`, Student → `/dashboard`)
- API requests are proxied server-side with cookies forwarded automatically

### State Management
- Redux Toolkit slice for global user state
- Persisted across navigation without re-fetching
- Type-safe actions and selectors

### UI
- Fully responsive landing page built with Tailwind CSS
- Clean, accessible component structure

---

## Project Structure

```
courstack/
├── public/                      # Static assets
├── src/
│   ├── actions/                 # Server actions
│   ├── app/
│   │   ├── (commonLayout)/      # Shared layout group
│   │   │   ├── (auth)/          # Login, Register pages
│   │   │   └── (public)/        # Public-facing pages (landing, etc.)
│   │   ├── (dashboardLayout)/   # Protected dashboard routes (WIP)
│   │   ├── types/               # App-level types
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   └── layout.tsx           # Root layout
│   ├── components/              # Shared UI components
│   ├── lib/                     # API client, utilities
│   ├── provider/                # Redux & other context providers
│   ├── redux/                   # Redux store, slices
│   ├── types/                   # Global TypeScript types
│   ├── zod/                     # Zod validation schemas
│   └── proxy.ts                 # Route protection & API proxy
├── .env.local
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

---

## Architecture Decisions

**App Router over Pages Router** — leverages React Server Components, nested layouts, and improved data fetching patterns for better performance and scalability.

**Redux Toolkit for user state** — while server components handle most data, the authenticated user's session state is a genuine global concern shared across the entire client tree, making Redux the right fit here.

**Proxy-based route protection (`proxy.ts`)** — the `proxy.ts` file handles both route protection and API proxying. It intercepts requests before the page renders, enforcing authentication and role-based access at the edge — more performant and secure than client-side checks, and compatible with the latest Next.js conventions.

**HTTP-only cookies for JWT** — tokens are never exposed to JavaScript, eliminating XSS-based token theft. The middleware proxy pattern allows server-side API calls to attach cookies automatically without exposing tokens to the browser.

**Zod + React Hook Form** — Zod schemas serve as the single source of truth for both form validation and TypeScript types, eliminating duplication and keeping validation consistent between client and server.

---

## Roadmap

The following modules are planned for upcoming development:

- [ ] Student dashboard with enrolled courses and progress
- [ ] Course browsing, search, and filtering
- [ ] Course detail page with lesson list
- [ ] Lesson content viewer (video + text)
- [ ] Enrollment flow with payment
- [ ] Instructor portal — create and manage courses/lessons
- [ ] Admin panel — user management, stats, course moderation
- [ ] Profile and settings pages
- [ ] Toast notifications and global error handling
- [ ] Dark mode support

---

## License

This project is licensed under the ISC License.

---

> 🚧 Actively in development — star the repo to follow progress: [github.com/Sushanto171/courstack](https://github.com/Sushanto171/courstack)