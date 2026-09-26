# Booking & Service Marketplace — Frontend

A modern multi-role booking platform built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **TanStack Query**.

The application supports clients, service providers, and administrators through a modular feature-based architecture designed to keep business logic separated from route-level UI.

---

## 🚀 Overview

The frontend provides a complete booking experience for multiple user roles:

- Clients can browse services, view providers, create bookings, and manage appointments.
- Providers can manage services, availability, and incoming bookings.
- Administrators can review provider requests and manage platform data.
- Authentication and authorization flows are integrated with a NestJS backend.

---

## ✨ Key Features

### Public Experience
- Responsive landing page
- Provider directory
- Service directory
- Public provider/service details
- Role-based onboarding

### Client Portal
- User authentication
- Browse services and providers
- Booking creation
- Appointment management
- Stripe checkout flow
- Booking history

### Provider Portal
- Provider onboarding
- Service management
- Availability scheduling
- Booking management
- Provider dashboard

### Admin Portal
- Provider request review
- User management
- Provider management
- Service management
- Approval and rejection workflows

---

## 🛠️ Tech Stack

### Core
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

### State & Data
- TanStack React Query v5
- Axios
- React Hook Form
- Zod

### UI
- Shadcn/UI
- Base UI
- Radix UI
- React Toastify

### Integration
- Stripe
- Cloudinary-backed API workflows
- REST API integration

---

## 🧱 Architecture

The project follows a **feature-based modular structure**.

Instead of placing business logic directly inside route files, each domain is isolated inside its own feature module.

Typical feature structure:

```text
feature/
├── dto/
├── entity/
├── hooks/
├── repo/
├── validations/
└── views/
```

This approach improves:

- Maintainability
- Feature isolation
- Reusability
- Easier refactoring
- Clear separation between UI and data-access logic

---

## 📂 Project Structure

```text
app/
├── (pages)/
│   ├── (auth)/
│   ├── (user)/
│   ├── admin-dashboard/
│   ├── provider-dashboard/
│   ├── booking/
│   ├── providers/
│   └── services/
│
├── _components/
├── _modules/
│   ├── auth/
│   ├── users/
│   ├── providers/
│   ├── services/
│   ├── availability/
│   ├── booking/
│   ├── payment/
│   ├── notifications/
│   └── guards/
│
├── globals.css
└── layout.tsx

components/
├── ui/
└── theme-provider.tsx

Providers/
├── react-query-provider.tsx
└── toast-provider.tsx

utils/
├── axiosInstance.ts
└── constance.ts
```

---

## 🔐 Route Protection

The application includes client-side route guards:

- `AuthGuard` — protects authenticated routes
- `GuestGuard` — blocks authenticated users from login/register pages
- `RoleGuard` — restricts role-specific routes

Supported roles:

- User
- Provider
- Admin

---

## 🌐 API Integration

The frontend communicates with the backend through a centralized Axios instance.

Example:

```ts
axios.create({
  withCredentials: true,
});
```

Browser requests use relative `/api/...` paths through Next.js rewrites, preserving same-origin cookie authentication. Server components use the same backend origin directly.

---

## 💳 Stripe Integration

The frontend uses Stripe's publishable key only.

Example:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

> Stripe secret keys must remain on the backend and should never be exposed through `NEXT_PUBLIC_*` variables.

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

On Vercel, set `API_URL` to the deployed backend origin (for example,
`https://booking-wad3.onrender.com` if that is still your backend), without `/api`.
Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to your Stripe publishable key.
Apply these to Production and any Preview environments you deploy, then redeploy.
`NEXT_PUBLIC_API_URL` remains a supported fallback; `API_URL` takes precedence.
Missing or loopback backend URLs are rejected in production. Development defaults
to `http://localhost:5000` when neither API variable is configured.

Services and provider listings render dynamically; parameterized backend pages
already render at request time. The backend need not be available during the build,
but must be running when users access those pages. A backend redeploy is only
needed if it is not deployed or its configuration needs updating. Cookie auth
through the proxy requires cookies without a backend-only Domain attribute;
production cookies should be Secure and HttpOnly. If the backend validates request
origins, allow the Vercel frontend origin.

Never set Stripe secrets in frontend environment variables, including the legacy
misspelled `NEXT_PUBLIC_STRIPE_SECREAT_KEY`. Remove that variable from Vercel if
present, and rotate the key if it was exposed. Stripe secrets belong on the backend.

---

## ▶️ Getting Started

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

```bash
pnpm build
pnpm start
```

---

## 🧹 Linting

```bash
pnpm lint
```

---

## 🎯 What I Learned

This project was one of my first large full-stack applications using a structured feature-based architecture.

It helped me gain practical experience with:

- Multi-role systems
- Authentication and authorization flows
- Feature-based architecture
- Server-state management
- Booking workflows
- Payments
- Frontend/backend separation
- Building maintainable applications beyond tutorial-style projects

---

## 📌 Status

The project is actively maintained as a portfolio project and serves as an example of my work with modern full-stack architecture.

---

## 👨‍💻 Author

**Mo'men Alswafiri**

- GitHub: https://github.com/momen-x
- LinkedIn: https://www.linkedin.com/in/mo’men-alswafiri-8b6491346
