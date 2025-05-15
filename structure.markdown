📦 become-fe/
│
├── 📁 app/ # Next.js App Router directory
│ ├── 📁 api/ # API routes (e.g., /api/auth)
│ ├── 📁 (auth)/ # Public routes (login, register) using route groups
│ │ ├── login/
│ │ └── register/
│ ├── 📁 products/ # Product listing pages
│ ├── 📁 cart/ # Cart page
│ ├── 📁 checkout/ # Checkout page
│ ├── 📁 account/ # Authenticated user dashboard
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Root landing/home page
│ └── globals.css # Tailwind and global styles
│
├── 📁 components/ # Reusable UI components
│ ├── ui/ # UI atoms/molecules (buttons, cards)
│ ├── layout/ # Header, Footer, Navigation
│ └── shared/ # Shared components (Modals, Loaders)
│
├── 📁 features/ # Redux Toolkit feature slices
│ ├── auth/ # Auth slice (login, register, user)
│ ├── cart/ # Cart slice
│ ├── products/ # Product slice
│ └── orders/ # Order slice
│
├── 📁 hooks/ # Custom React hooks (e.g., useAuth, useCart)
│
├── 📁 store/ # Redux store configuration
│ └── index.ts
│
├── 📁 lib/ # Helper libraries (API clients, auth utils, etc.)
│ ├── api.ts # Axios or fetch wrapper
│ └── auth.ts # JWT helpers, cookie handlers
│
├── 📁 utils/ # Utility functions (e.g., formatters, validators)
│
├── 📁 types/ # Global TypeScript types/interfaces
│ └── index.ts
│
├── 📁 constants/ # Static config values, routes, messages
│ └── routes.ts
│
├── 📁 tests/ # Unit and component tests
│ ├── components/
│ ├── features/
│ └── setupTests.ts # React Testing Library config
│
├── 📁 public/ # Static assets (images, favicon, etc.)
│
├── .env.local # Local environment variables
├── tailwind.config.js
├── postcss.config.js
├── jest.config.js # Jest configuration
├── tsconfig.json
└── next.config.js
