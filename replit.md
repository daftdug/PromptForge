# Overview

Prompt Magic is an educational marketing landing page built to explain and promote the value of the Prompt Magic platform to business-oriented audiences. The application is a full-stack React-based web application that serves as a marketing funnel to convert visitors into users and promote professional training courses. It features a modern, responsive design with multiple sections showcasing community features, social proof, training offerings, and clear call-to-action elements that drive users to the main promptmagic.dev platform.

## Recent Updates (August 19, 2025)

Enhanced the landing page with professional visual assets and interactive elements:

✓ Added high-quality background images to hero section, features showcase, and training section
✓ Implemented animated counter components for social proof statistics with intersection observer
✓ Created new testimonials section with professional imagery 
✓ Added parallax scrolling effects to final CTA section with floating icons
✓ Enhanced visual hierarchy with gradient overlays and backdrop blur effects
✓ Integrated professional photography assets (keyboard, laptop, business professional images)
✓ Improved user engagement with smooth animations and visual transitions
✓ Successfully migrated project from Replit Agent to standard Replit environment
✓ Updated typography to use Google NTR font family throughout the application
✓ Modified video section with simplified design: centered "See Prompt Magic in Action" button with Play icon
✓ Scaled down hero text sizes for better balance and increased "Start Exploring" button size for improved visibility
✓ Reduced hero video height to better match text content and create more balanced layout
✓ Cleaned up video container by removing overlapping text and buttons, keeping only the gradient overlay
✓ Reduced overall hero section height from full screen to 70vh for more compact design
✓ Restored demo button overlay on hero video with centered "Watch Demo" button and Play icon
✓ Increased video container height for better visual presence (h-80 mobile, h-96 desktop)
✓ Enhanced hero gradient with vibrant blue tones for more dynamic visual appeal

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens for consistent theming including custom color palette (prompt-purple, prompt-cyan, prompt-pink, etc.)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile menu implementation

## Backend Architecture
- **Server**: Express.js with TypeScript running in ES module mode
- **Development**: Custom Vite integration for hot module replacement and development middleware
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **API Structure**: RESTful API design with /api prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Architecture
- **Database**: PostgreSQL with Neon serverless database integration
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: User management schema with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema migrations and versioning
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Build and Development Setup
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development Mode**: Concurrent frontend and backend development with hot reload
- **Production Build**: Static asset generation with Express server for production deployment
- **TypeScript Configuration**: Shared types between frontend and backend through shared schema

# External Dependencies

## UI and Component Libraries
- **Radix UI**: Complete primitive component library for accessible UI components
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **React Hook Form**: Form state management with validation
- **Embla Carousel**: Touch-friendly carousel component

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: TypeScript ORM for database operations
- **Drizzle Kit**: Database migration and schema management tools

## Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript/TypeScript bundler for backend
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Replit Integration**: Development environment integration with error overlay and cartographer plugins

## Authentication and Session Management
- **Connect-pg-simple**: PostgreSQL session store for Express sessions
- **Crypto**: Node.js built-in for UUID generation and security operations

## Utility Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **Wouter**: Minimalist router for React applications
- **nanoid**: URL-safe unique ID generator