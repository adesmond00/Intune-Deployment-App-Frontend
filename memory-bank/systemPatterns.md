# System Patterns: Intune Deployment App Frontend

## High-Level Architecture
The application follows a standard single-page application (SPA) architecture built with React.

```mermaid
graph TD
    User --> Browser[Browser SPA]
    Browser --> ViteDevServer[Vite Dev Server (Development)]
    Browser --> StaticFiles[Static Files (Production)]
    StaticFiles --> IndexHTML[index.html]
    IndexHTML --> ReactApp[React Application Bundle (JS/CSS)]
    ReactApp --> Router[React Router]
    Router --> Layout[Layout Component]
    Layout --> Header[Header]
    Layout --> Sidebar[Sidebar]
    Layout --> Page[Current Page Component]

    style ReactApp fill:#61DAFB
    style Router fill:#f9f
    style Layout fill:#ccf
    style Header fill:#cfc
    style Sidebar fill:#cfc
    style Page fill:#ffc
```

## Core UI Patterns
- **Layout Component (`src/components/Layout.tsx`):** A wrapper component that establishes the main visual structure (Header, Sidebar, Content Area). It will manage the state for the sidebar's visibility.
- **Header Component (`src/components/Header.tsx`):** A persistent component at the top of the page, potentially containing branding, user information, and controls (like a sidebar toggle).
- **Sidebar Component (`src/components/Sidebar.tsx`):** A navigation component, likely using Headless UI's `Dialog` and `Transition` for the slide-out effect and accessibility. It will contain navigation links.
- **Page Components (`src/pages/*`):** Components representing distinct views or pages within the application (e.g., `Dashboard.tsx`). These are rendered within the `Layout`'s content area via React Router.

## Modularity & Composability
- **Atomic Design Principles (Inspired):** While not strictly adhering, the goal is to build small, reusable components (atoms/molecules) and compose them into larger structures (organisms/templates/pages).
- **Utility-First Styling:** Tailwind CSS encourages composing styles directly in the markup, promoting reusability of utility classes rather than large custom CSS components.
- **Headless Components:** Using Headless UI and Radix UI provides the functional and accessibility logic, allowing styling flexibility via Tailwind.

## State Management (Initial)
- Local component state (React `useState`) will be used initially for UI state (e.g., sidebar open/closed).
- Global state management (like Zustand or Redux Toolkit) might be introduced later if application complexity grows.
