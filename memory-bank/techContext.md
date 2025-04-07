# Technical Context: Intune Deployment App Frontend

## Core Technologies
- **Framework/Library:** React (v18+) with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:**
    - Headless UI (`@headlessui/react`): For unstyled, accessible components (e.g., Dialog, Transition).
    - Radix UI (`@radix-ui/*`): For accessible primitives (e.g., Icons, potentially others like DropdownMenu, Tooltip as needed).
- **Routing:** `react-router-dom` (v6+)

## Development Environment
- **Package Manager:** npm
- **Node.js:** Version 18+ recommended.
- **IDE:** VS Code (with recommended extensions for Tailwind, ESLint, Prettier).

## Key Dependencies (Initial Setup)
- `react`, `react-dom`
- `@types/react`, `@types/react-dom`
- `typescript`
- `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, `autoprefixer`
- `@headlessui/react`
- `@radix-ui/react-icons`
- `react-router-dom`

## Technical Constraints & Considerations
- Ensure proper configuration of Tailwind CSS with Vite.
- Leverage TypeScript for type safety and improved developer experience.
- Follow accessibility guidelines when implementing components using Headless UI and Radix UI.
- Set up ESLint and Prettier for code linting and formatting consistency (to be done after initial setup).
- **Known Issue (2025-04-07):** `npm run` scripts (e.g., `npm run dev`) fail to resolve executables in `node_modules/.bin` (like `vite` and `tailwindcss`). Workaround is to run them directly using `npx` (e.g., `npx vite`, `npx tailwindcss init -p`). This might be an environment-specific path issue.
