# Booking Restructuring

A modern booking management web app built with Next.js 16, React 19, TypeScript, Tailwind CSS, React Query, and Base UI. The project is structured around a booking workflow with separate modules for authentication, providers, services, and users.

## What This Project Does

This app appears to focus on booking-related management flows such as:

- browsing and managing providers
- browsing and managing services
- user authentication and profile actions
- dashboard-style pages for signed-in users
- reusable UI components and data-fetching hooks

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- TanStack React Query
- Axios
- Base UI
- React Hook Form
- Zod
- Lucide React
- React Toastify

## Project Structure

```text
app/
  layout.tsx            # Root layout, providers, theme, and shared header
  page.tsx              # Home page
  globals.css           # Global styles
  _components/          # Shared app components such as headers and back button
  _modules/             # Feature-based modules
    auth/               # Login/register hooks, views, and validation
    providers/          # Provider CRUD logic, hooks, DTOs, and views
    services/           # Service CRUD logic, hooks, DTOs, and views
    users/              # User profile, image, password, and account logic
  (pages)/              # Route groups for auth, user, providers, services, dashboard
components/
  ui/                   # Reusable UI primitives and wrappers
  theme-provider.tsx    # Theme system integration
Providers/
  react-query-provider.tsx  # TanStack Query provider setup
  toast-provider.tsx        # Toast provider setup
lib/
  utils.ts              # Shared helper utilities
utils/
  axiosInstance.ts      # Axios client and response interceptor
  constance.ts          # API URLs and shared query keys
public/
  assets/              # Static assets
```

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure the API URL

The frontend talks to a backend API through `utils/constance.ts`.

By default it uses:

```bash
http://localhost:5000
```

If your backend runs somewhere else, create a `.env.local` file and set:

```bash
NEXT_PUBLIC_API_URL=http://your-backend-host:5000
```

### 3. Run the development server

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
pnpm dev     # Start the development server
pnpm build   # Build the app for production
pnpm start   # Run the production build
pnpm lint    # Run ESLint
```

## Notes

- The app uses TanStack React Query, so the `QueryClientProvider` must wrap any component that calls `useQuery` or `useMutation`.
- Some API calls expect cookies or session credentials, so the Axios client is configured with `withCredentials: true`.
- Route groups under `app/(pages)` are used to organize user-facing pages without affecting the URL structure.

## Example Features

- authentication screens for login and register
- provider list and provider detail pages
- service list and service detail pages
- user profile and profile update flows
- reusable cards, inputs, avatars, buttons, and dropdown menus

## Deployment

Build the app first:

```bash
pnpm build
```

Then run it with:

```bash
pnpm start
```

If you deploy the frontend separately from the backend, make sure `NEXT_PUBLIC_API_URL` points to the correct API host.
